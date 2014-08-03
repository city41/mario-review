(ns mario.mario
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [>! <! put! chan]]
            [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [mario.video-to-image :as video-to-image]
            [mario.entity-explorer :as entity-explorer]
            [mario.activatable-video-view :as activatable-video-view]
            [mario.hud-explorer :as hud-explorer]
            [mario.level-explorer :as level-explorer]
            [mario.music-player :as music-player]
            [mario.gif-warning :as gif-warning]))

(enable-console-print!)


;; ITEMS
(def items {:type-name "item"
            :plural "items"
            :entities [
                       {:name "Mushroom"
                        :thumb "img/mushroom-item.png"
                        :video-src "video/eat-mushroom"
                        :width 136
                        :height 166
                        :description "The most recognizable and classic item in the Mario universe. Grabbing the mushroom turns regular Mario into Super Mario. It's not as useful as in previous Mario games due to being able to store an extra feather or fire flower."}
                       
                       {:name "Fire Flower"
                        :thumb "img/fire-flower.png"
                        :video-src "video/fire-flower"
                        :width 164
                        :height 264
                        :description "Another classic item. The Fire Flower doesn't play too prominant of a role in the game, as the cape is usually a better choice."}

                       {:name "Feather"
                        :thumb "img/feather.png"
                        :video-src "video/feather"
                        :width 188
                        :height 328
                        :description "A unique item to Super Mario World, it grants Mario with the yellow cape giving him a limited ability to fly and hover."}
                       
                       {:name "P-Block"
                        :thumb "img/p-block.png"
                        :video-src "video/p-block"
                        :width 228
                        :height 202
                        :description "Coins to blocks and blocks to coins. The P-Block has some other tricks up its sleeve as well, especially in Ghost Houses"}
                       
                       {:name "Yoshi"
                        :thumb "img/yoshi.png"
                        :video-src "video/yoshi-eat-spit-fire"
                        :width 190
                        :height 134
                        :description "Yoshi has proven to be a very popular addition to Super Mario World. He is one of the most important aspects of Super Mario World; he makes the game more interesting and more fun. He's so important, a whole section is dedicated to him later on in this article."}
                       
                       {:name "Silver P-Block"
                        :thumb "img/silver-pblock-item.png"
                        :video-src "video/silver-p-block-many-lives"
                        :width 340
                        :height 268
                        :description "The silver variant of the P-Block is pretty rare, and at first glance not that useful. It just turns enemies into silver coins. But if you use it in the right spot, it can lead to many extra lives. Here on Vanilla Secret 2, the Silver P-Block nets you about 50 lives."}
                       
                       {:name "Coin Snake"
                        :thumb "img/coin-snake.png"
                        :video-src "video/coin-snake"
                        :width 164
                        :height 280
                        :description "There's only a few of these in the game and most of them aren't very important. But the last one you find is. The secret to these guys is you control the coins as they emerge with the d-pad. You can see that in the above video, watch Mario move in sync with the coins."}
                       ]})


;; ENEMIES
(def enemies {:type-name "enemy"
              :plural "enemies"
              :entities [

                         {:name "Rip Van Fish"
                          :thumb "img/rip-van-fish.png"
                          :video-src "video/rip-van-fish"
                          :width 318
                          :height 282
                          :description "These little punks sure make water levels more challenging and interesting. If you're not packing a power up, it's worth your time to avoid waking them up."}

                         {:name "Sumo Brother"
                          :thumb "img/sumo-bros.png"
                          :flipped true
                          :video-src "video/sumo-bros"
                          :width 184
                          :height 256
                          :description "Big, badass Sumo Hammer Brother! This guy is just cool, although he doesn't really pose that much of a threat."}
                         
                         {:name "Koopa Troopa"
                          :thumb "img/koopa.png"
                          :flipped true
                          :video-src "video/koopa-troopas"
                          :width 316
                          :height 236
                          :description "Probably the most common enemy in the game and in the Mario series as a whole. Koopa Troopas have really grown in variety and personality in Super Mario World. So much so we gave them their own section below."}
                         {:name "Dino-Rhino"
                          :thumb "img/dino-rhino.png"
                          :flipped true
                          :video-src "video/dino-rhino"
                          :width 280
                          :height 240
                          :description "Dino-Rhino is lumbering and pretty dumb. But once you stomp on him, he turns into the faster and more deadly Dino-Torch."}
                         
                         {:name "Galoomba"
                          :thumb "img/galoomba.png"
                          :flipped true
                          :video-src "video/galoombas"
                          :width 344
                          :height 208
                          :description "These odd round balls are the Goombas of Super Mario World. The name \"Galoomba\" came later to distinguish them from regular Goombas. They have a Koopa-esque quality where Mario can pick them up, but they don't slide along the ground like koopa shells."} 
                         
                         {:name "Magikoopa"
                          :thumb "img/magikoopa.png"
                          :video-src "video/magikoopa"
                          :width 168
                          :height 304
                          :description "This pain in the butt only makes his appearance late in the game. He's become a staple late game enemy in Mario games ever since."}
                         

                         {:name "Chargin' Chuck"
                          :thumb "img/chargin-chuck.png"
                          :video-src "video/chargin-chuck"
                          :width 304
                          :height 204
                          :description "Chargin' Chuck is one enemy that really helps defines Super Mario World. He's a difficult advesary, comes in many forms, and can take a beating before dying. A nice touch is bouncing on his helmet accounts for it's shape and can deflect you in odd directions."}
                         
                         
                         {:name "Rex"
                          :thumb "img/rex.png"
                          :video-src "video/rex"
                          :width 220
                          :height 184
                          :description "One of the first new enemies you encounter in the game. Rex turned out to be a pretty simple enemy, although he does look pretty cool."}

                         {:name "Wiggler"
                          :thumb "img/wiggler.png"
                          :hover-thumb "img/mad-wiggler.png"
                          :video-src "video/wiggler"
                          :width 344
                          :height 196
                          :description "Not too common in Super Mario World, but have gone on to be a staple enemy in the Mario universe. They get angry when you stomp on them. Bouncing from wiggler to wiggler is one tactic for getting lots of extra lives."}
                         
                         {:name "Fishing Lakitu"
                          :thumb "img/fishing-lakitu.png"
                          :video-src "video/fishing-lakitu"
                          :width 372
                          :height 392
                          :description "The biggest troll in Super Mario World. Fishing Lakitu is a great enemy because he really creates an interesting dynamic in the Forest of Illusion 4 level. Best to not take his bait."}
                         ]})

;; KOOPAS
(def koopas {:type-name "koopa"
              :plural "koopas"
              :entities [{:name "Flying Koopas"
                          :thumb "img/flying-koopa.png"
                          :flipped true
                          :video-src "video/flying-koopas"
                          :width 356
                          :height 296
                          :description "These guys can be a real pain later in the game, but the flashing red ones give you a feather!"}
                         
                         {:name "Kamikaze Koopas"
                          :thumb "img/kamikaze-koopa.png"
                          :flipped true
                          :video-src "video/kamikaze-koopa"
                          :width 320
                          :height 188
                          :description "A beached yellow Koopa who re-enters a shell will become kamikaze. These suckers are hard to deal with, but a spin jump takes them out."}
                         
                         {:name "Blue Koopa Kick!"
                          :thumb "img/blue-koopa-kick.png"
                          :video-src "video/blue-koopa-kick"
                          :width 264
                          :height 204
                          :description "If a blue koopa loses his shell, he will kick any shells he comes across. This guy can be a real bastard in later levels."}
                         
                         {:name "Mask Koopas"
                          :thumb "img/mask-koopa.png"
                          :video-src "video/mask-koopas"
                          :width 344
                          :height 208
                          :description "Once you have beaten Special World, all koopas in the game become Mask Koopas. Instead of normal shells they wear Mario masks. Other enemies change too, but the Mask Koopa is the most prominent one."}

                         {:name "Climbing Koopas"
                          :thumb "img/koopa-on-fence.png"
                          :video-src "video/koopas-on-fence"
                          :width 312
                          :height 184
                          :description "In many of the castles Koopas can be seen climbing around on fences. Mario can get on the opposite side of the fence and punch them off."}
                         ]})

;; YOSHI TACTICS
(def yoshi-tactics {:type-name "Yoshi"
                    :plural "about Yoshi"
                    :entities [
                               {:name "Baby Yoshies"
                                :thumb "img/baby-yoshi.png"
                                :video-src "video/baby-yoshi-grows-up"
                                :width 176
                                :height 144
                                :description "In Star World levels there are baby yoshies of different colors. When they eat 5 enemies (or one item), they grow up into a full grown yoshi. Since they are colored yoshies, they also pack a special additional power."}

                               {:name "Blue Yoshi"
                                :thumb "img/blue-yoshi.png"
                                :video-src "video/blue-yoshi-fly"
                                :width 244
                                :height 256
                                :description "Blue Yoshies can fly whenever they have a shell of any color in their mouth. Any other Yoshi must find a blue shell to fly. Yoshi flight is by far one of the most useful abilities in the game."}
                               
                               {:name "Red Yoshi"
                                :thumb "img/red-yoshi.png"
                                :video-src "video/red-yoshi-spit-fire"
                                :width 336
                                :height 172
                                :description "Red Yoshies can spit fire with any colored shell. Any other Yoshi must find a red shell to do this, but they are very plentiful making Red Yoshi not that useful."}
                               
                               {:name "Yellow Yoshi"
                                :thumb "img/yellow-yoshi.png"
                                :flipped true
                                :video-src "video/yellow-yoshi-pound"
                                :width 352
                                :height 296
                                :description "Yellow Yoshies can stomp the ground and hurt enemies with any colored shell in their mouth. Any other Yoshi must find a yellow shell to do this. Since Yellow Yoshies and yellow shells are so rare, the stomping ability is rare. In fact, I never used it once at all when playing the game."}

                               {:name "Bypassing Switches"
                                :thumb "img/flying-yoshi.png"
                                :flipped true
                                :video-src "video/flying-yoshi-leads-to-secret-exit"
                                :width 256
                                :height 224
                                :description "Yoshi can often be used to get to secrets, even if the normal conditions for the secret aren't present. Here the player should have activated the red switch to get up into the secret area, but a flying Yoshi also does the trick."}
                               ]})


;; VIDEOS
(def title {:video-src "video/title-opening"
            :img-src "img/title.png"
            :width 436
            :height 164
            :pre-delay 1000
            :post-delay 1000})
(def basic-gameplay {:video-src "video/basic-gameplay"
                     :width 344
                     :height 208})
(def donut-ghost {:video-src "video/donut-ghost-house-secret-exit"
                  :width 460
                  :height 300})
(def soda-lake {:video-src "video/soda-lake"
                :width 260
                :height 232})
(def keyhole-exit {:video-src "video/keyhole-exit"
                   :width 360
                   :height 264})
(def cheese-bridge {:video-src "video/cheese-bridge-secret"
                    :width 384
                    :height 344})
(def eeries {:video-src "video/eeries"
             :width 192
             :height 184})
(def sunken-ghost-ship {:video-src "video/sunken-ghost-ship"
                        :width 304
                        :height 236})
(def ghost-house-p-block {:video-src "video/ghost-house-p-block"
                          :width 408
                          :height 328})
(def ghost-house-coin-snake {:video-src "video/ghost-house-coin-snake"
                             :width 336
                             :height 316})
(def ghost-house-boo-boss {:video-src "video/ghost-house-boo-boss"
                           :width 328
                           :height 296})
(def wendy {:video-src "video/wendy"
            :width 280
            :height 220})
(def morton-koopa {:video-src "video/destroy-morton-koopa-castle"
                   :width 396
                   :height 396})
(def first-see-bowser {:video-src "video/first-see-bowser"
                       :width 512
                       :height 448})
(def thank-you-ending {:video-src "video/thank-you-ending"
                       :width 512
                       :height 448})
(def yellow-switch-sequence {:video-src "video/yellow-switch-sequence"
                             :width 400
                             :height 320})
(def red-blocks-to-secret {:video-src "video/red-blocks-to-secret"
                           :width 400
                           :height 392})
(def exit-to-special-world {:video-src "video/exit-to-special-world"
                            :width 324
                            :height 224})
(def koopa-intro {:video-src "video/koopa-intro"
                  :width 444
                  :height 292})

;; MUSIC
(def music {:songs [{:name "above ground bgm"
                     :thumb-src "img/above-ground-thumb.png"
                     :file "music/aboveground-bgm.mp3"}
                    {:name "underground bgm"
                     :thumb-src "img/under-ground-thumb.png"
                     :file "music/underground-bgm.mp3"}
                    {:name "swimming bgm"
                     :thumb-src "img/swimming-thumb.png"
                     :file "music/swimming-bgm.mp3"}
                    {:name "athletic bgm"
                     :thumb-src "img/athletic-thumb.png"
                     :file "music/athletic-bgm.mp3"}
                    {:name "evil king koopa"
                     :thumb-src "img/evil-king-koopa-thumb.png"
                     :file "music/evil-king-koopa.mp3"}
                    {:name "special map"
                     :thumb-src "img/special-thumb.png"
                     :file "music/map-special.mp3"
                     }]})

;; LEVELS
(def levels {:levels [{:name "Chocolate Secret"
                       :thumb-src "img/levels/chocolate-secret-thumb.png"
                       :video-src "video/chocolate-secret"
                       :description "A simple but fun level involving lots of hills. Just hold down on the d-pad and enjoy the ride."}
                      {:name "Valley of Bowser 3"
                       :thumb-src "img/levels/valley-of-bowser-3-thumb.png"
                       :video-src "video/valley-of-bowser-3"
                       :description "Another challenge later level. Here you need to deal with floating platforms which have timers on them. Once they tick down to zero they fall away, making the platforming more tense and interesting."}
                      {:name "Larry's Castle"
                       :thumb-src "img/levels/larrys-castle-thumb.png"
                       :video-src "video/larrys-castle"
                       :description "A challenging castle later in the game which prominently features a \"snake\" to ride on. This style of castle has been popular ever since and been used several times in the New Super Mario Bros games. Larry's Castle is a personal favorite of mine."}
                      {:name "Bowser's Back Door"
                       :thumb-src "img/levels/bowsers-back-door-thumb.png"
                       :video-src "video/bowsers-back-door"
                       :description "The level right before confronting Bowser. Gameplay wise there's nothing unique here, but the spotlight effect is fun. I think Nintendo just saw a chance to show off the new hardware a little bit."}
                      {:name "Tubular"
                       :thumb-src "img/levels/tubular-thumb.png"
                       :video-src "video/tubular"
                       :description "A truly unique level almost entirely involving P-balloons. Also the hardest and most frustrating level in the game."}
                      {:name "Mondo"
                       :thumb-src "img/levels/mondo-thumb.png"
                       :video-src "video/mondo"
                       :description "As the tide rises and lowers progressing gets easier and harder. A nice touch is when the blurps flop around out of water and then go back to swimming again once the tide returns. This level is frustrating and not too fun, but later games executed the idea better."}
                      
                      ]})

(defn get-target [id]
  {:target (.getElementById js/document id)})

(om/root gif-warning/cmp nil (get-target "gif-warning-hook"))
(om/root video-to-image/root title (get-target "game-title-hook"))

(om/root activatable-video-view/root basic-gameplay (get-target "basic-gameplay-hook"))
(om/root activatable-video-view/root donut-ghost (get-target "donut-ghost-secret-hook"))
(om/root activatable-video-view/root soda-lake (get-target "soda-lake-hook"))
(om/root activatable-video-view/root keyhole-exit (get-target "keyhole-exit-hook"))
(om/root activatable-video-view/root cheese-bridge (get-target "cheese-bridge-secret-hook"))
(om/root activatable-video-view/root eeries (get-target "eeries-hook"))
(om/root activatable-video-view/root sunken-ghost-ship (get-target "sunken-ghost-ship-hook"))
(om/root activatable-video-view/root ghost-house-p-block (get-target "ghost-house-p-block-hook"))
(om/root activatable-video-view/root ghost-house-coin-snake (get-target "ghost-house-coin-snake-hook"))
(om/root activatable-video-view/root ghost-house-boo-boss (get-target "ghost-house-boo-boss-hook"))
(om/root activatable-video-view/root wendy (get-target "wendy-hook"))
(om/root activatable-video-view/root morton-koopa (get-target "destroy-morton-koopa-castle-hook"))
(om/root activatable-video-view/root first-see-bowser (get-target "first-see-bowser-hook"))
(om/root activatable-video-view/root thank-you-ending (get-target "thank-you-ending-hook"))
(om/root activatable-video-view/root yellow-switch-sequence (get-target "yellow-switch-sequence-hook"))
(om/root activatable-video-view/root red-blocks-to-secret (get-target "red-blocks-to-secret-hook"))
(om/root activatable-video-view/root exit-to-special-world (get-target "exit-to-special-world-hook"))
(om/root activatable-video-view/root koopa-intro (get-target "koopa-intro-hook"))

(om/root hud-explorer/cmp nil (get-target "hud-hook"))

(om/root entity-explorer/cmp items (get-target "item-explorer-hook"))
(om/root entity-explorer/cmp enemies (get-target "enemy-explorer-hook"))
(om/root entity-explorer/cmp koopas (get-target "koopa-explorer-hook"))
(om/root entity-explorer/cmp yoshi-tactics (get-target "yoshi-explorer-hook"))
(om/root level-explorer/cmp levels (get-target "level-explorer-hook"))

(om/root music-player/cmp music (get-target "music-player-hook"))
