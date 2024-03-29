
      function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      function getSize() {
        let size;
        document.getElementsByName("size").forEach((n) => {
          if (n.checked) {
            size = n.id;
          }
        });
        return size;
      }
      function getCharacter() {
        let character;
        document.getElementsByName("character").forEach((n) => {
          if (n.checked) {
            character = n.id
          }
        });
        return character;
      }
      function getColor() {
        let color;
        document.getElementsByName("color").forEach((n) => {
          if (n.checked) {
            color = n.id;
          }
        });
        return color;
      }
      function getGeography() {
        let geography;
        document.getElementsByName("geography").forEach((n) => {
          if (n.checked) {
            geography = n.id;
          }
        });
        return geography;
      }
      document.querySelector("#gallery > section > div.filter-container > div.submit-btn > button").addEventListener("click", function () {
        alert("working")
        //console.log(getSize(), getCharacter());
        console.log(
          search(getCharacter(), getSize(), getColor(), getGeography())
        );
      });
      function search(character = "", size = "", color = "", geography = "") {
        var data_dog = [
          {
            Pic: "Australian_Shepherd.jpg",
            Name: "Australian Shepherd",
            Size: "Large",
            Character: "Smartest",
            Color: "Others",
            Geography: "North America",
            Origin: "United States",
            Breed_Group: "Herding (AKC:1991 & UKC)",
            Type: "Purebred",
            Temperament:
              "Active, Affectionate, Friendly, Good-natured, Intelligent, Protective, Loving",
            Height: "20-23 inches (52-58cm)",
            Weight: "50-65 pounds (25-29 kg)",
            Overview:
              "This is an athletic dog of medium size and bone; it is lithe, agile and slightly longer than it is tall. It is muscular and powerful enough to work all day, without sacrificing the speed and agility necessary to cope with bolting livestock. Its gait is free and easy, and it must be able to change direction or speed instantly. Its double coat is weather resistant, with the outer coat of medium texture and length, straight to wavy. The expression is keen, intelligent and eager.\n The Australian shepherd has a great deal of stamina and is loving, bold, alert, confident, independent, smart and responsive. If it doesn't get a chance to exercise and challenge its strongly developed mental and physical activities, it is apt to become frustrated and difficult to live with. With proper exercise and training, it is a loyal, utterly devoted and obedient companion. It is reserved with strangers and has a protective nature. It may try to herd children and small animals by nipping.",
            History:
              "The Australian Shepherd (affectionately called an �Aussie�) does not actually originate in Australia. It is believed that some Basque farmers brought ancestors of these dogs with them when they emigrated to Australia, then subsequently to the United States during the 1849 California gold rush. However, the breed as it is known today was developed in the American Southwest over the next few decades. \n The Australian dog was crossed with several breeds in an effort to produce an animal able to deal with the harsh temperatures and demands of the American West. Breeding during this period was mainly focused on ability�speed, agility, and endurance--rather than appearance, which delayed the Australian Shepherd�s recognition as a breed. Australian Shepherds became popular pets after they were featured as rodeos performers in the 1950�s, and later in Disney films such as �Run Appaloosa Run�. Australian Shepherds were recognized by the American Kennel Club in 1993.",
            Galary: "G_AustralianShepherd.jpg",
          },
          {
            Pic: "BerneseMountainDog.jpg",
            Name: "Bernese Mountain Dog",
            Size: "Large",
            Character: "Smartest",
            Color: "Black",
            Geography: "Europe",
            Origin: "United States",
            Breed_Group: "Working (AKC:1937), Guardian Dogs (UKC)",
            Type: "Purebred",
            Temperament: "Affectionate, \nFaithful, \nIntelligent, \nLoyal",
            Height: "24-28 inches (61�71 cm)",
            Weight: "85-110 pounds (38�50 kg)",
            Overview:
              "The Bernese Mountain Dog is slightly longer than tall, though it appears square. It is a sturdy, large, hardy dog capable of both draft and droving work. This requires a combination of strength, speed and agility. Its natural working gait is a slow trot, but with good reach and drive. Its thick coat is moderately long, and slightly wavy or straight, providing insulation from the cold. Its expression is gentle, and its coloring is striking. The Bernese mountain dog is an easygoing, calm family companion (that is, after it leaves its adolescent stage). It is sensitive, loyal and extremely devoted. It is gentle with children and often reserved with strangers. It generally gets along well with other dogs and pets.",
            History:
              "The Bernese Mountain Dog, or Berner Sennenhund in his native Switzerland, was used as an all-around farm dog by Alpine herdsmen in the canton of Bern. The dogs drove cattle to pasture, pulled milk carts to the dairy, and acted as watchdogs on the farm. Generally, Berners hauled milk in pairs, so it was common to see two of them hooked to a cart. Berners are thought to have descended from mastiff-type dogs who came to Switzerland along with Roman armies some 2,000 years ago. There they interbred with local dogs and were developed to help with farm work. With industrialization, however, the dogs almost disappeared. The breed was revived in the early 20th century to become a companion dog, although many still carried out their traditional farm duties as well. The American Kennel Club recognized the Bernese Mountain Dog in 1937.",
            Galary: "G_BerneseMountainDog.jpg",
          },
          {
            Pic: "CaneCorso.jpg",
            Name: "Cane Corso",
            Size: "Large",
            Character: "Best-guard",
            Color: "Black",
            Geography: "Europe",
            Origin: "Italy",
            Breed_Group: "Working (AKC:2010), Guardian Dogs (UKC)",
            Type: "Purebred",
            Temperament: "Cheerful, Courageous, Loyal, Quiet, Social",
            Height: "24-27 inches (64-68 cm)",
            Weight: "99-110 pounds (45-50 kg)",
            Overview:
              "The Cane Corso also known as the Italian Mastiff, is a large Italian breed of dog, for years valued highly in Italy as a companion, Guard dog and hunter.\nIntelligent, the Cane Corso is easily trained. As a large and athletic breed, they need a lot of exercise. For this breed to be a well-balanced member of society, he needs extensive socialization and training from an early age. He does not do well crated all day and should have a fenced in yard for adequate exercise. They are affectionate to their owner and bond closely with children and family. The Corso requires substantial time invested and owners with an understanding of dog hierarchy.",
            History:
              "The Cane Corso Italiano (also known as the �Italian Mastiff� or �Cane Corso Mastiff�) is a war and hunting dog which originated in southern Italy. It likely descends from the Neapolitan mastiff and the Roman �Canis Pugnax�, a powerful war dog, though the Cane Corso Italiano is a lighter, more agile breed which was used by troops for hunting or as an auxiliary force (�Corso� comes from the Latin for �guardian�). The Cane Corso Italiano was also used in bull baiting, a gambling �sport� wherein one or more dogs were matched up against a chained bull. The Cane Corso Italiano had declined to near extinction by the 1980�s, but since then an intentional effort to rescue the breed has increased the dog�s numbers substantially. It is most prominent in southern Italy.",
            Galary: "G_CaneCorsoItalian.jpg",
          },
          {
            Pic: "Drever.jpg",
            Name: "Drever",
            Size: "Small",
            Character: "Hypoallergenic",
            Color: "Others",
            Geography: "Europe",
            Origin: "Sweden",
            Breed_Group: "Hound, Scenthound (UKC)",
            Type: "Purebred",
            Temperament: "Alert, Even Tempered, Keen, Self-assured",
            Height: "11-16 inches (28-40 cm)",
            Weight: "	32-34 pounds (14-16 kg)",
            Overview:
              "The Drever's most noticeable characteristic are its long body and short legs, inherited from the Westphalian Dachsbracke, but as a working dog these features are not exaggerated. It has short fur, and is of any color with white markings (but not all white, which has been linked to deafness.) The breed has the typical drop (hanging) ears of a hound, and a long tail. The maximum height of a Drever is 38 cm (15 ins) at the withers, which is about 15 cm (approx. 6 ins) shorter than a long legged hunting hound with the same size body. The Westphalian Dachsbracke is about 2 cm (less than an inch) shorter than the Drever.\nAlert, calm, friendly and even, the Drever is known for the ongoing slight wag of his tail. The Drever often wants to continue working long after its human companion has satisfied his own hunting instinct. It has a first-class nose and is a powerful tracker. Because of its short legs, it is slower than other hounds. This makes it ideal for maneuvering game toward the hunter's gun. The Drever is a steady worker that hunts hare, fox, and occasionally deer; but this dog has the courage to pit himself against even a wild boar. In such cases, he circles and dodges the prey, warning the hunter by barking furiously. The Drever has an excellent nose and a musical voice which is much larger than his size would seem to warrant. The Drever was bred to be tenacious on the hunt and therefore it is very important that the owners of this breed are just as stern when dealing with him in order to show him where his place is among his human pack. Owners who are determined and consistent with the rules, displaying a natural firm but not harsh authority over the dog will bring out the best in this breed. Passive owners will find the dog to become stubborn and headstrong. Drevers that lack in mental and physical exercise and/or leadership will develop quirks in their temperament. Socialize this dog well.",
            History:
              "Small sized German hounds were imported to Sweden in 1910. These dogs gained a reputation as very good deer trackers. In 1947, the larger variety of these dogs was given the name Drever, and it was soon recognized as a Swedish breed. They are considered the first choice breed for deer tracking but are also used for hunting hare and fox. The Drever was recognized by the United Kennel Club January 1, 1996.",
            Galary: "G_drever.jpg",
          },
          {
            Pic: "EntlebucherMountainDog.jpg",
            Name: "Entlebucher Mountain Dog",
            Size: "Medium",
            Character: "Hypoallergenic",
            Color: "Black",
            Geography: "Europe",
            Origin: "Switzerland",
            Breed_Group: "Herding (AKC:2011), Guardian Dogs (UKC)",
            Type: "Purebred",
            Temperament: "Agile, Devoted, Independent, Loyal, Self-confidence",
            Height: "19-20 inches (48-51 cm)",
            Weight: "	55-66 pounds (25-30 kg)",
            Overview:
              "Swiss herders developed four breeds of mountain dog known for their striking tricolor coats. Of these, the Entlebucher (ENT-leh-boo-cur) Mountain Dog is the smallest and quickest. They�re muscular, long-backed cattle dogs with short, sturdy legs. They stand from 16 to 21 inches at the shoulder, with females at the lower end of the scale. Their dark eyes draw you into an attentive, friendly face. Bred to move cattle up and down sloping pastures, Entles are famous for agility, balance, and rugged determination.\nThey may be reserved with strangers. Entles are an active, high energy and physical breed, with above average exercise requirements, so they are not a dog for the casual owner. Entlebuchers do best when they have a job. Although the Entlebucher loves and is devoted to children, his shepherding instincts can make integrating small children and a puppy a bit tricky. The Young Entle can become possessive and begin to consider children to be �his own� to herd and watch over. Being exceptionally strong for his size, the Entle can easily overwhelm a child. Very careful consideration should be taken when considering adding this breed to a family with small children.",
            History:
              "The Entlebucher (Entlebuch Mountain Dog/Entlebucher Cattle Dog) is the smallest of the four Swiss Sennenhund breeds. The crossing of the Roman Mastiffs with the local Swiss working dogs during the time of the Roman invasion of Europe resulted in the Sennenhunds: the Greater Swiss Mountain Dog, Appenzeller Sennenhund, Entlebucher and Bernese Mountain Dog. It is generally accepted that the Greater Swiss Mountain Dog was the first of these breeds, and the other three developed from it. The Entlebucher was primarily used by Alpine herdsmen to drive cattle.",
            Galary: "G_EntlebucherMountainDog.jpg",
          },
          {
            Pic: "FinnishLapphund.jpg",
            Name: "Finnish Lapphund",
            Size: "Medium",
            Character: "Fluffy",
            Color: "Black",
            Geography: "Europe",
            Origin: "Finland",
            Breed_Group: "Herding (AKC:2011), Northern Breeds (UKC)",
            Type: "Purebred",
            Temperament: "Calm, Courageous, Faithful, Friendly, Keen",
            Height: "18�20 inches (46�52 cm)",
            Weight: "37-42 pounds (17-19 kg)",
            Overview:
              "The Bernese Mountain Dog is slightly longer than tall, though it appears square. It is a sturdy, large, hardy dog capable of both draft and droving work. This requires a combination of strength, speed and agility. Its natural working gait is a slow trot, but with good reach and drive. Its thick coat is moderately long, and slightly wavy or straight, providing insulation from the cold. Its expression is gentle, and its coloring is striking.\nThe Bernese mountain dog is an easygoing, calm family companion (that is, after it leaves its adolescent stage). It is sensitive, loyal and extremely devoted. It is gentle with children and often reserved with strangers. It generally gets along well with other dogs and pets.",
            History:
              "TThe Bernese Mountain Dog, or Berner Sennenhund in his native Switzerland, was used as an all-around farm dog by Alpine herdsmen in the canton of Bern. The dogs drove cattle to pasture, pulled milk carts to the dairy, and acted as watchdogs on the farm. Generally, Berners hauled milk in pairs, so it was common to see two of them hooked to a cart. Berners are thought to have descended from mastiff-type dogs who came to Switzerland along with Roman armies some 2,000 years ago. There they interbred with local dogs and were developed to help with farm work. With industrialization, however, the dogs almost disappeared. The breed was revived in the early 20th century to become a companion dog, although many still carried out their traditional farm duties as well. The American Kennel Club recognized the Bernese Mountain Dog in 1937.",
            Galary: "G_FinnishLapphund.jpg",
          },
          {
            Pic: "GreaterSwissMountainDog.jpg",
            Name: "Greater Swiss Mountain Dog",
            Size: "Large",
            Character: "Smartest",
            Color: "Black",
            Geography: "Europe",
            Origin: "United States",
            Breed_Group: "Working (AKC:1937), Guardian Dogs (UKC)",
            Type: "Purebred",
            Temperament: "Affectionate, Faithful, Intelligent, Loyal",
            Height: "24-28 inches (61�71 cm)",
            Weight: "85-110 pounds (38�50 kg)",
            Overview:
              "The Bernese Mountain Dog is slightly longer than tall, though it appears square. It is a sturdy, large, hardy dog capable of both draft and droving work. This requires a combination of strength, speed and agility. Its natural working gait is a slow trot, but with good reach and drive. Its thick coat is moderately long, and slightly wavy or straight, providing insulation from the cold. Its expression is gentle, and its coloring is striking.\nThe Bernese mountain dog is an easygoing, calm family companion (that is, after it leaves its adolescent stage). It is sensitive, loyal and extremely devoted. It is gentle with children and often reserved with strangers. It generally gets along well with other dogs and pets.",
            History:
              "TThe Bernese Mountain Dog, or Berner Sennenhund in his native Switzerland, was used as an all-around farm dog by Alpine herdsmen in the canton of Bern. The dogs drove cattle to pasture, pulled milk carts to the dairy, and acted as watchdogs on the farm. Generally, Berners hauled milk in pairs, so it was common to see two of them hooked to a cart. Berners are thought to have descended from mastiff-type dogs who came to Switzerland along with Roman armies some 2,000 years ago. \n There they interbred with local dogs and were developed to help with farm work. With industrialization, however, the dogs almost disappeared. The breed was revived in the early 20th century to become a companion dog, although many still carried out their traditional farm duties as well. The American Kennel Club recognized the Bernese Mountain Dog in 1937.",
            Galary: "G_GreaterSwissMountainDog.jpg",
          },
          {
            Pic: "HamiltonHound.jpg",
            Name: "Hamilton Hound",
            Size: "Large",
            Character: "Smartest",
            Color: "Others",
            Geography: "Europe",
            Origin: "United States",
            Breed_Group: "Working (AKC:1937), Guardian Dogs (UKC)",
            Type: "Purebred",
            Temperament: "Affectionate, Faithful, Intelligent, Loyal",
            Height: "24-28 inches (61�71 cm)",
            Weight: "85-110 pounds (38�50 kg)",
            Overview:
              "The Bernese Mountain Dog is slightly longer than tall, though it appears square. It is a sturdy, large, hardy dog capable of both draft and droving work. This requires a combination of strength, speed and agility. Its natural working gait is a slow trot, but with good reach and drive. Its thick coat is moderately long, and slightly wavy or straight, providing insulation from the cold. Its expression is gentle, and its coloring is striking.\nThe Bernese mountain dog is an easygoing, calm family companion (that is, after it leaves its adolescent stage). It is sensitive, loyal and extremely devoted. It is gentle with children and often reserved with strangers. It generally gets along well with other dogs and pets.",
            History:
              "TThe Bernese Mountain Dog, or Berner Sennenhund in his native Switzerland, was used as an all-around farm dog by Alpine herdsmen in the canton of Bern. The dogs drove cattle to pasture, pulled milk carts to the dairy, and acted as watchdogs on the farm. Generally, Berners hauled milk in pairs, so it was common to see two of them hooked to a cart. Berners are thought to have descended from mastiff-type dogs who came to Switzerland along with Roman armies some 2,000 years ago. \nThere they interbred with local dogs and were developed to help with farm work. With industrialization, however, the dogs almost disappeared. The breed was revived in the early 20th century to become a companion dog, although many still carried out their traditional farm duties as well. The American Kennel Club recognized the Bernese Mountain Dog in 1937.",
            Galary: "G_HamiltonHound.jpg",
          },
          {
            Pic: "IcelandicSheepdog.jpg",
            Name: "Icelandic Sheepdog",
            Size: "Large",
            Character: "Smartest",
            Color: "Others",
            Geography: "Europe",
            Origin: "United States",
            Breed_Group: "Working (AKC:1937), Guardian Dogs (UKC)",
            Type: "Purebred",
            Temperament: "Affectionate, Faithful, Intelligent, Loyal",
            Height: "24-28 inches (61�71 cm)",
            Weight: "85-110 pounds (38�50 kg)",
            Overview:
              "Finnish Lapphunds, with their luscious coat, sweet spitz-like face, and profusely coated tail curving over the back, are instantly recognizable as Nordic dogs. Built for hard work in frigid temperatures north of the Arctic Circle, Lappies stand about 20 inches at the shoulder and are surprisingly powerful for their size, with well-developed muscles and substantial bone beneath a double coat that comes in many colors and patterns. Lappies are agile dogs of effortless movement, capable going from a trot to full gallop in a second flat.\n Few Lappies today in America have seen a reindeer, but they adapt well to other kinds of work, including obedience, agility, tracking therapy, and herding other types of livestock. When working, Finnish Lapphunds are agile, alert and noisy. While interacting with people, however, the breed is calm, friendly, and very submissive. Lappy puppies are adorable, but new owners should take care to remember that a small puppy grows up quickly and needs to learn good habits early on. Socialization, puppy classes and basic training will help him learn those habits.",
            History:
              "The region extending across northern Norway, Sweden and Finland is sometimes called Lapland, and it is home of the Sami people. For centuries, the Sami depended on the reindeer for food. Life in this harsh environment would not have been possible without the Spitz dogs which helped the Sami hunt, and later herd, the reindeer. Eventually, these herding Spitz type dogs developed into three breeds, the Swedish Lapphund, the Lapponian Herder, and the Finnish Lapphund. The Finnish Lapphund is the original native breed, and is still used today as a herding dog. The breed first came to the United States in 1987.",
            Galary: "G_IcelandicSheepdog.jpg",
          },
          {
            Pic: "J�mthund.jpg",
            Name: "J�mthund",
            Size: "Large",
            Character: "Smartest",
            Color: "Black",
            Geography: "Europe",
            Origin: "Sweden",
            Breed_Group: "Northern Breeds (UKC)",
            Type: "Purebred",
            Temperament: "Loyal, Independent, Active, Calm, Energetic",
            Height: "22�26 inches (57�65 cm)",
            Weight: "20�24 inches (52�60 cm)",
            Overview:
              "The J�mthund is a large, rectangular spitz breed, clean cut, strong, substantial and agile. It must not give the impression of having a long body or of being overly heavy in body, as it is a breed known for great endurance. Courageous and energetic, but also stoically calm. \n As with most breeds developed for hunting, the J�mthund requires a lot of regular exercise to stay fit, both physically and mentally. It quickly becomes bored if kept indoors for too long and can become destructive.",
            History:
              "The J�mthund is a breed with ancient origins, though it was only recognized as a separate breed in 1946, because it used to be shown together with the smaller Norwegian Elkhound. The breed was mainly used for hunting Elk, though it was sometimes used on bear and lynx as well.",
            Galary: "G_Jamthund.jpg",
          },
          {
            Pic: "Komondor.jpg",
            Name: "Komondor",
            Size: "Large",
            Character: "Best-guard",
            Color: "White",
            Origin: "Hungary",
            Breed_Group: "Working (AKC:1937), Guardian Dogs (UKC)",
            Type: "Purebred",
            Temperament:
              "Affectionate, Calm, Fearless, Gentle, Independent, Steady",
            Height: "25.5 inches (65 cm)",
            Weight: "125 pounds (59 kg)",
            Overview:
              "The Komondor is a large, muscular dog, with plenty of bone and substance; it is slightly longer than tall. Its gait is light and leisurely, with long strides. Its hallmark coat is double, consisting of a dense wooly undercoat and a coarser outer coat that is wavy or curly. The undercoat is trapped in the outer coat so that it forms strong, felty, tassel-like cords. This coat helped protect the dog from the elements as well as the teeth of tough adversaries. It also helped the dog to blend in with its flock.\nThe Komondor, being naturally wary of strangers, makes an excellent house guard dog. They are devoted to their master and will defend him against attack by any stranger. This trait makes it advisable that the dog only be used as a herd/flock guardian/protector, not for driving. When mature, the breed is an earnest, courageous, very faithful herd/flock guardian. While a puppy, the Komondor is playful.",
            History:
              "The Komondor is descended from Tibetan dogs. Some think the Komondor was brought to Hungary a thousand years ago by nomadic Magyars to guard large herds of cattle and sheep. However, newer studies show it came from the Cumans. The name Komondor came from the name Koman-dor, meaning �dog of the Cumans.� Komondor remains have been found in Cuman gravesites. \n The earliest written reference is from the 16th century. The breed spread throughout the rest of the world beginning in 1920 when it began to compete in dog shows. The Komondor, still to this day, lives for many months outdoors in all kinds of weather, as they protect their master's flocks. They do not herd the flock, but rather protect them, primarily without any human assistance. The breed was recognized by the AKC in 1937.",
            Galary: "G_Komondor.jpg",
          },
          {
            Pic: "LapponianHerder.jpg",
            Name: "Lapponian Herder",
            Size: "Medium",
            Character: "Hypoallergenic",
            Color: "Black",
            Geography: "Europe",
            Origin: "Finland",
            Breed_Group: "Herding",
            Type: "Purebred",
            Temperament: "Calm, Docile, Energetic, Friendly,Vocal",
            Height: "19�21 inches (48�54 cm)",
            Weight: "55-65 pounds",
            Overview:
              "The Lapinporokoira is a medium-sized dog, with medium length fur in a double coat. Ears are pricked (standing up; drop ears are a disqualifying fault.) Colour is generally black or dark grey or brown, with a lighter shade on the head and lower parts of the body, often with white markings. Height should be 51 cm (20 in) at the withers for males, 46 cm (18 in) for females. Males and females should look distinctly different. Weight is between 55-65 pounds, males usually heavier than females.\nThe breed standard states that the dog should be calm, friendly, and docile, but also energetic. Most herding breeds need to be given regular exercise. The temperament of individual dogs may vary.",
            History:
              "The Lapinporokoira is recognised under Finnish sponsorship as F�d�ration Cynologique Internationale breed number 284, in Group 5 Spitz and primitive types Section 3 Nordic Watchdogs and Herders. The stud book for the breed remains open. Exported to North America, it is recognised there by the United Kennel Club in the Herding Group (the United Kennel Club places the Finnish Lapphund in the Northern Breed Group.) It is also recognised by various minor kennel clubs and internet based dog registry businesses, and promoted as a rare breed for those seeking a unique pet.",
            Galary: "G_LapponianHerder.jpg",
          },
          {
            Pic: "MountainCur.jpg",
            Name: "Mountain Cur",
            Size: "Medium",
            Character: "Best-guard",
            Color: "Others",
            Geography: "North America",
            Origin: "United States",
            Breed_Group: "Working,Scenthound breeds (UKC)",
            Type: "Purebred",
            Temperament: "Intelligent, Protective",
            Height: "18-26 inches (46-66 cm)",
            Weight: "30-60 pounds (13-27 kg)",
            Overview:
              "The Mountain Cur is a powerful, agile tree dog of medium size. The body is square or just slightly longer than tall. Legs are long enough to allow the dog to move quickly and with agility in rough terrain. The head is broad, with a moderate stop, and a muzzle slightly shorter than the length of skull. Ears are set high and drop. The tail is straight, set low, and may be a natural bob. The coat is dense but close fitting. \n The Mountain Cur should be evaluated as a working dog, and exaggerations or faults should be penalized in proportion to how much they interfere with the dog�s ability to work. Scars should neither be penalized nor regarded as proof of a dog�s working abilities.",
            History:
              "The Mountain Cur was declared a breed in 1957 with the organization of the Original Mountain Cur Breeders of America (OMCBA). Prior to that time, dogs of this type could only be found in very remote, rural areas, and there were no organized breeding records. The most common strains of Mountain Cur included the McConnell, Stephens, Ledbetter, Arline and York strains. OMCBA was able to assemble breeders and register the original-type Mountain Cur. \nOn the last weekend of September 1991, a group of men and women met at Robert and Lou Ella Kemmer's house and formed a new breed club that registered a strain of linebred cur that became known as the Kemmer Stock Mountain Cur. These curs are Mountain Curs that are bred from the above-mentioned lines. The best was bred to the best and then linebred. Kemmer Stock Mountain Curs were first registered with the Kemmer Stock Mountain Cur Breeders� Association (KSBA). Mountain Curs from OMBCA and KSBA provided the foundation stock for the UKC Mountain Cur breed. Today these dogs are used on squirrel, raccoon, and all types of big game.",
            Galary: "G_MountainCur.jpg",
          },
          {
            Pic: "NorwegianLundehund.jpg",
            Name: "Norwegian Lundehund",
            Size: "Small",
            Character: "Fluffy",
            Color: "Others",
            Geography: "Europe",
            Origin: "Norway",
            Breed_Group: "Non Sporting (AKC:2011),Northern Breed (UKC)",
            Type: "Purebred",
            Temperament: "Alert \n Energetic \nLoyal\nProtective",
            Height: "12-15.5 inches (31-39 cm)",
            Weight: "13-20 pounds (6-9 kg)",
            Overview:
              "The Norwegian Lundehund is a small and agile Spitz breed with several unique characteristics in combination not found in any other dog. Features such as six toes on each foot; prick ears that fold closed, forward or backward at will; and the ability to tip the head backward until it touches the back bone all helped them perform their job as Puffin hunter. Their dense coat ranges from fallow to reddish brown to tan in color, with black hair tips and white markings, or white with red or dark markings.",
            History:
              "The Norwegian Lundehund is among the world's rarest of dogs. It is a member of the Spitz family. It originated in Vaerog and Rost in northern Norway. For centuries it was used to hunt puffins from nests on steep cliffs. Puffins, however, in the 1800s, became a protected species and were no longer hunted. The dogs were no longer useful to the farmers and the breed numbers dwindled. However, sometime after WWII the breed was saved from extinction through the friendship of two concerned Norwegians. The Norwegian Lundehund was not recognized as a distinct breed until 1943. The Norwegian Lundehund was first recognized by the AKC on July 1, 2011.",
            Galary: "G_NorwegianLundehund.jpg",
          },
          {
            Pic: "OldeEnglishBulldogge.jpg",
            Name: "Olde English Bulldogge",
            Size: "Medium",
            Character: "Best-guard",
            Color: "Others",
            Geography: "North America",
            Origin: "United States",
            Breed_Group: "Guardian Dogs (UKC)",
            Type: "Purebred",
            Temperament: "Alert\n Confident\n Courageous",
            Height: "17-20 inches (43-51 cm)",
            Weight: "60-80 pounds (27-36 kg)",
            Overview:
              "The Olde English Bulldogge is a muscular, medium-sized dog of great strength, and possesser of fluid, agile movement. He is well balanced and proportioned, while appearing capable of performing without any breathing restrictions in either heat or in cold. Serious Faults: Excessive wrinkle, lack of pigment around eyes, nose or mouth.",
            History:
              "In 1971 a breeding project began using a linebreeding scheme developed by Dr. Fechimer of Ohio State to rapidly achieve a purebred dog. The goal of this project was to return the bulldog to the appearance of the �Regency-Period� bulldog, now named the Olde English Bulldogge (OEB) to clearly differentiate the new breed from the modern English Bulldog. Today�s Olde English Bulldogge matches the looks of the bull baiting dog of the early 1800�s.\n They are, first and foremost, excellent companions, while also possessing the drive, temperament and agility to perform in numerous working venues as well as being service dogs. The revival of a healthy dog with the longevity to live well into its teens is a primary goal. The Olde English Bulldogge was recognized by the United Kennel Club on January 1, 2014.",
            Galary: "G_OldeEnglishBulldogge.jpg",
          },
          {
            Pic: "Pomeranian.jpg",
            Name: "Pomeranian",
            Size: "Small",
            Character: "Smartest",
            Color: "Others",
            Geography: "Europe",
            Origin: "Germany \n Poland",
            Breed_Group: "Toy (AKC:1888) \n Companion Breeds (UKC)",
            Type: "Purebred",
            Temperament: "Active \n Extroverted \n Intelligent \n Playful",
            Height: "7-12 inches (18-30 cm)",
            Weight: "3-7 pounds (1-3 kg)",
            Overview:
              "The Pomeranian is a small, square-proportioned, miniature spitz with a cobby, rounded body. It shares the spitz characteristics of small ears, double coat and curled tail. It has an alert, foxlike expression. Its gait is smooth and free with good reach and drive. The soft thick undercoat combined with the longer harsh outer coat, standing off from the body, combine to give the dog a unique puffy appearance. This look is further accentuated by the thick ruff and a head carriage that is naturally up-gazing.",
            History:
              "The Pomeranian got its name from the region of Pomerania, which is now the area of Germany and Poland, where it was developed from the ancient Spitz breeds. The original Pomeranians were much larger, weighing up to 30 pounds, and worked as sheep herders. Marie Antoinette, Emile Zola, Mozart and Queen Victoria all owned Pomeranians.\n In 1870 the Kennel Club in England first recognized them as a breed. In 1888 Queen Victoria began breeding and showing the dogs. It was she who started breeding them down in size, making the breed very popular in England. The Pomeranian was first recognized by the AKC in 1888. Some of the Pom's talents include: watchdog, agility and performing tricks. Poms make superior circus performers.",
            Galary: "G_Pomeranian.jpg",
          },
          {
            Pic: "RatTerrier.jpg",
            Name: "Rat Terrier",
            Size: "Small",
            Character: "Fluffy",
            Color: "Black",
            Geography: "North America",
            Origin: "United States",
            Breed_Group: "Terrier (AKC:2013 & UKC)",
            Type: "Purebred",
            Temperament: "Affectionate, Inquisitive, Lively",
            Height: "14-23 inches (35.5-58.5 cm)",
            Weight: "12-35 pounds (5.5-16 kg)",
            Overview:
              "The Rat Terrier is a multipurpose companion dog that is capable of hunting rodents and vermin above and below ground as well as coursing small game. He is a sturdy, compact, small-to-medium sized parti-colored dog giving the appearance of elegance and athleticism. His short, smooth coat may come in any variation of pied patterning. Pied is described as comparatively large patches of one or more colors in combination with white. Acceptable colors, with or without tan points, include the predominate black, or chocolate, red, apricot, blue, fawn, tan, or lemon.",
            History:
              "The Rat Terrier is an American breed descended from the terriers brought over by English miners and other working class immigrants. These terriers probably included crosses between the Smooth Fox Terrier, the Manchester Terrier and the now extinct white English Terrier. These dogs were used as ratters, and gambling on their prowess in killing rats was a favorite hobby of their owners.\n Some of these dogs were crossed with Whippets or Italian Greyhounds (for speed) and Beagles (for hunting ability). Eventually, these tough little terriers evolved into today�s Rat Terrier. The breed was popularized by President Teddy Roosevelt, who frequently hunted with his Rat Terriers. Many are still used as ratters and squirrel hunters, particularly in the South, where they are sometimes known as �Feists�. The Rat Terrier was officially recognized by the AKC in 2013.",
            Galary: "G_ratterrier.jpg",
          },
          {
            Pic: "ShibaInu.jpg",
            Name: "ShibaInu",
            Size: "Medium",
            Character: "Fluffy",
            Color: "Others",
            Geography: "Asia",
            Origin: "Japan",
            Breed_Group: "Non Sporting (AKC:1992)",
            Type: "Purebred",
            Temperament: "Alert \n Charming \n Confident \n Loyal",
            Height: "14-16 inches (36-41 cm)",
            Weight: "18-25 pounds (8-11 kg)",
            Overview:
              "The Shiba Inu is moderately compact, being slightly longer than it is tall. It has typical traits of dogs from Northern heritage: small erect ears, thick fur, powerful body and curled tail. Its expression is bold, spirited and good-natured. The gait is light, quick and agile, with an effortless, smooth stride. The double coat consists of a strong straight outer coat with a soft undercoat, imparting great insulation. These traits enabled the shiba to hunt small game through dense cover.",
            History:
              "The Shiba is the smallest of the Japanese native breeds, which include the Kai Inu, Hokkaido Inu, Kishu Inu, Shikoku Inu, Tosa Inu and the Akita Inu. Despite its smaller size it was bred to hunt small wild game, bear, boar and to flush birds. The name Shiba means, both small and brushwood in Japanese. It may have been named after the terrain the dogs hunted in or the color of the Shiba's coat, or perhaps the dog's size. \n The word Inu means dog. As with many breeds, the second world war nearly did the breed in. After the war was over, several breeding programs worked to bring the breed back to safe numbers. The Shiba is one of the most popular breeds in Japan today and is gaining numbers in the USA. The Shiba Inu was recognized by the AKC in 1992. Some of the Shiba's talents include: hunting, tracking, watchdog, guarding, agility and performing tricks.",
            Galary: "G_ShibaInu.jpg",
          },
          {
            Pic: "ToyFoxTerrier.jpg",
            Name: "Toy Fox Terrier",
            Size: "Small",
            Character: "Fluffy",
            Color: "White",
            Geography: "North America",
            Origin: "United States",
            Breed_Group: "Toy (AKC:2003), Terriers (UKC)",
            Type: "Purebred",
            Temperament: "Alert \n Charming \n Confident \n Loyal",
            Height: "10 inches (25 cm)",
            Weight: "	3.5-7 pounds (1.5-3 kg)",
            Overview:
              "The Toy Fox Terrier has all the same traits that make the Smooth Fox Terrier such a successful hunter -- just in a diminutive package. This is an athletic, agile and graceful dog with surprising strength and the stamina to frolic all day. The gait is smooth and effortless. The coat is short and smooth, perfect for caressing.",
            History:
              "The Toy Fox Terrier is an American breed descending from the first registered Smooth Fox Terrier, named �Foiler�. Fox Terriers were bred for fox bolting (chasing foxes out into the open where they could be attacked by larger dogs); white was preferred to distinguish the dogs from foxes at night. The Fox Terrier was one of the earliest show dogs, recognized by the American Kennel Club in 1885 (the Smooth Fox Terrier and Wire Fox Terrier were recognized as distinct breeds a century later). \n Toy Fox Terriers were bred from their larger cousins by American farmers who favored the shorter variety for chasing rodents. Toy Fox Terriers were crossed with other breeds such as the Chihuahua and Manchester Terrier for a smaller size and slightly calmer temperament. The Toy Fox Terrier was recognized as a distinct breed by the American Kennel Club in 2003.",
            Galary: "G_ToyFoxTerrier.jpg",
          },
          {
            Pic: "Vizsla.jpg",
            Name: "Vizsla",
            Size: "Medium",
            Character: "Fluffy",
            Color: "Others",
            Geography: "Europe",
            Origin: "Hungary",
            Breed_Group: "Sporting (AKC:1960), Gun Dogs (UKC)",
            Type: "Purebred",
            Temperament: "Affectionate \n Faithful \n Intelligent \n Loyal",
            Height: "22-26 inches (56-66 cm)",
            Weight: "20-24 inches (51-61 cm)",
            Overview:
              "The Vizsla is lightly built but muscular, giving it speed and endurance in the field. Its gait is light, graceful, smooth and ground-covering. Its short smooth coat is dense, providing some protection from the elements. The golden rust color is a hallmark of the breed.",
            History:
              "The Vizsla (pronounced �veezhla�, �zh� as in �vision�), also known as the �Hungarian Vizsla�, �Hungarian Pointer�, or �Magyar Vizsla�, is an ancient Hungarian breed. It was used by the Magyar tribe of the Carpathian Basin for rat hunting as far back as 800 A.D, and later adapted for pointing, retrieving, and tracking. The first written record of the Vizsla appears in the �Illustrated Vienna� chronicle, prepared on order of King Louis the Great in 1357. Vizslas faced near extinction in the 1800�s, falling in popularity to the English pointer. \n The Vizsla is an ancestor of the Weimaraner and German Shorthaired Pointer, and these breeds may have been later crossed back into the Vizsla. The rare Wirehaired Vizsla (only a few hundred exist in North America) was developed by crossing the Vizsla with the German Wirehaired Pointer and Griffon in the 1930�s for a dog with heavier coat for hunting in cold weather. A Vizsla named Sari was the first Vizsla imported to the United States, in 1950. The Vizsla was recognized by the American Kennel Club in 1960 and is today a popular show dog, hunter, and pet.",
            Galary: "G_Vizsla.jpg",
          },
          {
            Pic: "WestSiberianLaika.jpg",
            Name: "West Siberian Laika",
            Size: "Medium ",
            Character: "Fluffy",
            Color: "White",
            Geography: "Europe",
            Origin: "Russia",
            Breed_Group: "Hound\nNorthern Breed (UKC)",
            Type: "Purebred",
            Temperament: "Aggressive\n Balanced\n Lively",
            Height: "22-24 inches (56-61 cm)",
            Weight: "35-50 pounds (16-23 kg)",
            Overview:
              "The West Siberian Laika is a medium to large size dog, strong, well built northern breed, with a general wolf-like appearance. The breed is never coarse or massive. Due to the arctic conditions in the country of origin, the coat is very important. It must be double, dense, very hard and not too long.",
            History:
              "The West Siberian Laika originally comes from the North Ural and West Siberia. The current breed was developed from two different types. The breed is lighter in build and narrower in head than the East Siberian Laika. It is an all around hunting dog, used on birds and small game and also occasionally on large game. The West Siberian Laika was recognized by the United Kennel Club on January 1, 1996.",
            Galary: "G_WestSiberianLaika.jpg",
          },
          {
            Pic: "Xoloitzcuintli.jpg",
            Name: "Xoloitzcuintli",
            Size: "Medium",
            Character: "Fluffy",
            Color: "Others",
            Geography: "North America",
            Origin: "Mexico",
            Breed_Group:
              "Non Sporting (AKC:2010), Sighthounds and Pariah Dogs (UKC)",
            Type: "Purebred",
            Temperament:
              "Sighthounds and Pariah Dogs (UKC)\n Cheerful\n Companionablel",
            Height: "15-20 inches (38-51 cm)",
            Weight: "15-30 pounds (6.8-14 kg)",
            Overview:
              "One of the world's oldest and rarest breeds, the Xoloitzcuintli can justly be called the first dog of the Americas. Archaeological evidence indicates that Xolos accompanied man on his first migrations across the Bering Straits. Their name is derived from the name of the Aztec Indian god Xolotl and Itzcuintli, the Aztec word for dog. With a reputation as a healer, the breed and its warm skin is often put to use in remote Mexican and Central American villages to ward off and cure ailments like rheumatism, asthma, toothache and insomnia. Xolos were also believed to safeguard the home from evil spirits and intruders.",
            History:
              "The Xoloitzcuintli is a very ancient Latin American breed, dating back to before the time of the Aztec Empire and its existence can be substantiated for as far back as three thousand years. They were held in high esteem by the native Toltec and Mayan civilizations. The Aztecs, however, extended their appreciation of the breed to one of a culinary nature. With the defeat of the Aztecs and their culture by the Spanish, the breed diminished drastically, essentially becoming rare. \n It is thought the breed was saved from extinction by its adoption by remote, mountain-dwelling Indians. Never entirely forgotten, interest in the breed was eventually revived and it was formally recognized by the FCM (Mexican Kennel Club) in 1956. The Xolo today is being acknowledged with increased interest for its companionship, loyalty, cleanliness and flexibility to do it all! They make great companions, show, agility, obedience, therapy and service dogs.",
            Galary: "G_Xoloitzcuintli.jpg",
          },
          {
            Pic: "YorkshireTerrier.jpg",
            Name: "Yorkshire Terrier",
            Size: "Small",
            Character: "Fluffy",
            Color: "Others",
            Geography: "Europe",
            Origin: "United Kingdom",
            Breed_Group: "Companion (UKC), Toy (AKC:1885)",
            Type: "Purebred",
            Temperament: "Alert\n Courageous\n Courageous",
            Height: "24-28 inches (61�71 cm)",
            Weight: "85-110 pounds (38�50 kg)",
            Overview:
              "The Yorkshire Terrier�s appearance is that of a well-balanced, long coated, small (Toy-type) terrier, readily identified by its steel blue and tan, straight-flowing coat. The hair is parted on the muzzle and from the base of the skull to the end of the tail. The body is square and evenly proportioned. The dog�s high head carriage and confident manner gives the appearance of vigor and self-importance.",
            History:
              "The Yorkie was created by working men of north England, who developed the breed for catching the terrible rats and mice that infested clothing mills and mine shafts. These hunting dogs could penetrate into badger and fox burrows. The breed is not very old, but its origins are not entirely certain.\n However, it seems likely that Scotsmen seeking work in the woolen mills of Yorkshire brought with them various types of terrier, including the Skye Terrier, Dandie Dinmont, Manchester Terrier, Maltese and the now-extinct Clydesdale (Paisley Terrier). These were then crossed with local types, such as the longhaired Leeds Terrier. At first, the Yorkie was a much bigger animal than the one we see today, but by selectively breeding the smallest individuals, the dog was gradually miniaturized over the years. It was made into a fashion dog. Women carried these little dogs in their bags and under their arms. The Yorkshire Terrier was first recognized by the AKC in 1885.",
            Galary: "G_YorkshireTerrier.jpg",
          },
          {
            Pic: "MiniatureSharPei.jpg",
            Name: "Miniature Shar Pei",
            Size: "Small",
            Character: "Hypoallergenic",
            Color: "Others",
            Geography: "Asia",
            Origin: "China",
            Breed_Group: "	Non-Sporting (AKC)",
            Type: "Purebred",
            Temperament: "Confident\n Independent\n Playful\n Adaptable",
            Height: "17 inches and under (43 cm)",
            Weight: "85-110 pounds (38�50 kg)",
            Overview:
              "Miniature Shar Peis have a shoulder height up to 43 cm (17 in) and weigh up to 17 kg (38 lbs). Like their larger brethren, they are known for their blue-black tongue and profusely wrinkled head, neck, and shoulders. They have large heads with small, highly set ears, and thick tails which curl over the back. Miniature Shar Peis have large, wide muzzles, and small, sunken eyes. Puppies have wrinkles all over their bodies.",
            History:
              "This breed goes back to around 200 BC in China where it was a cross of relatives to the Chow Chow, Mastiff, Terrier, and Bulldog. Over the years this breed became larger as the mastiff influence began to come out. What many people do not know is that the Miniature actually represents a more accurate build of the breed's true dimensions. Until Shar Pei became AKC recognized, and the larger standard was adopted, those breeding what are now known as Miniature Shar Pei were actually breeding the more original size. This was recently discovered through the finding of the gene responsible for the miniature size. Before this many thought that the smaller sized dogs were unhealthy or considered to be mistakes. Today Miniature Shar Pei breeders believe that this breed is special unto itself and worthy of approval by the American Kennel Club.",
            Galary: "G_MiniatureSharPei.jpg",
          },
          {
            Pic: "Eurasier.jpg",
            Name: "Eurasier",
            Size: "Medium",
            Character: "Fluffy",
            Color: "Others",
            Geography: "Europe",
            Origin: "Germany",
            Breed_Group: "Northern Breed (UKC)",
            Type: "Cross Breed",
            Temperament: "Alert\n Alert\n Intelligent\n Reserved",
            Height: "20-24 inches (52-60 cm)",
            Weight: "50-70 pounds (23-32 kg)",
            Overview:
              "The Eurasier is a balanced, well-constructed, medium-sized Spitz (Spitzen) type dog with prick ears. It comes in different colors: fawn, red, wolf-grey, solid black, and black and tan. All color combinations are allowed, except for pure white, white patches, and liver color. F�d�ration Cynologique Internationale (FCI) standards call for the Eurasier to have a thick undercoat and medium-long, loosely lying guard hair all over the body, with a short coat on the muzzle, face, ears, and front legs. The tail and the back of the front legs (feathers) and hind legs (breeches) should be covered with long hair. The coat on the Eurasier's neck should be slightly longer than on the body, but not forming a mane. The breed may have a pink, blue-black or spotted tongue.",
            History:
              "The Eurasier was developed in the '60s to be a gentle family dog and protector. German breeder Julius Wipfel began by crossing Chow Chows with Wolfspitzes (which in some countries are considered the same breed as the Keeshond). One Samoyed male also contributed to the new breed�s bloodlines. Originally called the Wolf Chow, the dogs were recognized in 1973 by the Federation Cynologique Internationale and given the name Eurasier to symbolize their combined European and Asian heritage. The dogs are popular in Germany and Switzerland but are still little known in the United States. The breed was recognized by the United Kennel Club in 1996 under the name Eurasian. The UKC categorizes it as a Northern breed, the FCI consider it a Spitz or Primitive type.",
            Galary: "G_Eurasier.jpg",
          },
          {
            Pic: "GiantSchnauzer.jpg",
            Name: "Giant Schnauzer",
            Size: "Large",
            Character: "Smartest",
            Color: "Black",
            Geography: "Europe",
            Origin: "Germany",
            Breed_Group: "Working (AKC:1930), Companion Breeds (UKC)",
            Type: "Purebred",
            Temperament: "Dominant \n Kind \n Intelligent \n Powerful",
            Height: "26-28 inches (66-71 cm)",
            Weight: "60-105 pounds (27-48 kg)",
            Overview:
              "The Giant Schnauzer is a larger, more powerful version of the standard schnauzer. Its body is strong, compact and nearly square, combining great power with agility. Its stride is free and vigorous, with good reach and drive. Its double coat consists of a soft undercoat and a harsh, wiry, dense outer coat � a combination that enables it to withstand harsh, alpine conditions. Its hallmark harsh beard and eyebrows, coupled with its smart outline, make for a striking figure. The combination of rugged build, reliable temperament and weather-resistant coat make for a powerful and versatile worker.",
            History:
              "The Giant Schnauzer is a separate breed from the Miniature Schnauzer and Standard. Their country of origin is Germany. Breeds were developed for specific work in the 1600's; this breed was developed to be used as drovers of sheep and cattle and as a guard dog. Its coat was also influenced by weather and living conditions. Some of the breeds which were used in the development were the Standard Schnauzer, Great Dane, Rough Collies and possibly the Bouvier des Flandres. The breed was not that well known until World War I when it was used for police training.",
            Galary: "G_GiantSchnauzer.jpg",
          },
          {
            Pic: "GermanShepherdDog.jpg",
            Name: "German Shepherd Dog",
            Size: "Large",
            Character: "Smartest",
            Color: "Others",
            Geography: "Europe",
            Origin: "Germany",
            Breed_Group: "Herding (AKC:1908, UKC)",
            Type: "Purebred",
            Temperament: "Alert\n Confident \n Courageous \n Watchful",
            Height: "24-26 inches (60-65 cm)",
            Weight: "66-88 pounds (30-40 kg)",
            Overview:
              "The German Shepherds are medium to large-sized dogs, well-balanced, muscular dog, slightly longer than tall, with a medium length coat, erect ears, and a low-set natural tail that normally reaches to the hock and is carried in a slight curve like a saber. The outline of the German Shepherd Dog is made up of smooth curves rather than angles. The head is in proportion to the size of the body, strong without appearing coarse or fine. Gender differences are readily apparent. The German Shepherd Dog should be evaluated as an all-around working dog, and exaggerations or faults should be penalized in proportion to how much they interfere with the dog�s ability to work.",
            History:
              "The German Shepherd Dog is a relatively young breed, developed almost single-handedly in the first half of the twentieth century by a German cavalry officer, Max von Stephanitz, president of the Verein far Deutsche Schaferhunde S.V. Using a variety of German sheepdogs as his foundation stock, von Stephanitz developed a distinctive breed in a very short period of time, due in large part to the authoritarian practices of the German dog fancy at that time. \n Von Stephanitz emphasized utility and intelligence in his breeding program, enabling the German Shepherd Dog to switch easily from herding duties to other fields of work, particularly military and police work. The breed was just gaining notice in the United States when World War I broke out. All things German were shunned and popularity slumped. After the war, however, movie star Rin-Tin-Tin stimulated interest in the breed again. The striking good looks of this breed, combined with its remarkable intelligence and loyalty, have made it a favorite working and companion dog.",
            Galary: "G_GermanShepherdDog.jpg",
          },
          {
            Pic: "FinnishSpitz.jpg",
            Name: "Finnish Spitz",
            Size: "Medium",
            Character: "Hypoallergenic",
            Color: "Others",
            Geography: "Europe",
            Origin: "Finland",
            Breed_Group: "Non Sporting (AKC:1988), Northern Breeds (UKC)",
            Type: "Purebred",
            Temperament: "Happy\n Independent\n Intelligent, Loyal",
            Height: "15-20 inches (38-51 cm)",
            Weight: "31-35 pounds (14-16 kg)",
            Overview:
              "The Finnish Spitz has a foxlike appearance, incorporating the typical traits of a Northern breed: small erect ears, dense double coat and curled tail. It is square-proportioned, and without exaggeration, quick and light on its feet. It has the conformation and temperament to hunt actively and tirelessly under the coldest of conditions. Its double coat, consisting of a short soft undercoat and harsh straight outer coat about 1 to 2 inches long, provides insulation from the snow and cold, allowing it to hunt tirelessly under the coldest of conditions.",
            History:
              "The Finnish Spitz dogs were originally known as the Suomenpystrykorva (the Finnish Cock-Eared Dog) and the Finnish Barking Birddogs. About 2000 years ago they were brought from the Volga River area of central Russia to what is now Finland, and are considered the National dog of Finland, and are mentioned in several patriotic songs. They were used to hunt small game. \n When the dog would find their pray they would alert the hunter with their distinctive yodel type, ringing bark, pointing with their head in the direction the animal was in. The breed is more popular in Scandinavian countries and less popular in the USA, most likely due to their reputation of using their bark to alert their masters. The Finnish Spitz makes a good bird dog. It was first recognized by the AKC in 1988.",
            Galary: "G_FinnishSpitz.jpg",
          },
          {
            Pic: "Whippet.jpg",
            Name: "Whippet",
            Size: "Medium",
            Character: "Hypoallergenic",
            Color: "Black",
            Geography: "Europe",
            Origin: "United Kingdom",
            Breed_Group: "Hound (AKC:1888), Sighthound & Pariah (UKC)",
            Type: "Purebred",
            Temperament: "Affectionate, Friendly, Gentle, Intelligent",
            Height: "19 - 22 inches (47 - 56 cm)",
            Weight: "	25 - 45 pounds (11 - 21 kg)",
            Overview:
              "The Whippet is a greyhound in miniature, the whippet is among the sleekest of dogs, with a curvaceous, streamlined silhouette, long legs and a lean physique. It is the ultimate sprinter, unsurpassed by any other breed in its ability to accelerate to top speed and to twist and turn with unequaled agility. The whippet is a lightweight version of the greyhound, with an especially supple top-line and powerful hindquarters enabling it to execute the double-suspension gallop at its most extreme. It is square or slightly longer than tall. The gait is low and free-moving. The expression is keen and alert.",
            History:
              "The Whippet was developed at the end of the 19th century through crossing among the Greyhound, the Italian Greyhound, and another terrier type dog. Its name derives from the expression whip it, meaning �to move quickly.� The Whippet is an outstanding track racer over short distances, reaching speeds of up to 37 miles per hour (60 km per hour), reaching those speeds in seconds! Coursing these dogs was an entertaining form of gambling for the lower classes in England and the Whippet was nicknamed the poor man�s racehorse. The Whippet was recognized by AKC in 1888 and by the English Kennel Club in 1891. Some of the Whippet's talents include: hunting, sighting, watchdog, racing, agility and lure coursing.",
            Galary: "G_Whippet.jpg",
          },
          {
            Pic: "Basenji.jpg",
            Name: "ABasenji",
            Size: "Medium",
            Character: "Fluffy",
            Color: "Others",
            Geography: "Asia",
            Origin: "Congo",
            Breed_Group: "Hound (AKC:1943), Sighthounds and Pariahs (UKC)",
            Type: "Purebred",
            Temperament: "Affectionate \n Alert \n Curious \n Energetic",
            Height: "16-17 inches (41-43 cm)",
            Weight: "22-26 pounds (10-12 kg)",
            Overview:
              "The Basenji is square-proportioned and high on leg. It is far more slightly built and longer-legged than most other primitive breeds, giving it a good amount of speed and the ability to perform the double-suspension gallop. Its erect ears help it locate prey in thick bush and may act as heat dissipaters. Its short coat also aids in dealing with the hot climate of Africa.",
            History:
              "The Basenji (also known as an �African Bush Dog�, �Congo Dog�, or �Congo Terrier�) is an ancient breed which can be seen depicted on stone tablets in Egyptian tombs. The modern breed originates in the African Congo (�Basenji� means �bush thing�), where they were used as pack hunters to chase game into nets. \n Basenjis were imported to England in the 1930�s, then to America. They increased in popularity after being featured as the title character of a popular 1950�s book and movie, �Goodbye, My Lady�. Some Basenjis from Africa were imported in the 1980�s, widening the gene pool and introducing the brindle color to the breed.",
            Galary: "G_Basenji.jpg",
          },
          {
            Pic: "ThaiRidgeback.jpg",
            Name: "Thai Ridgeback",
            Size: "Medium",
            Character: "Smartest",
            Color: "Black",
            Geography: "Asia",
            Origin: "Thailand",
            Breed_Group: "Hound, Sighthound & Pariah (UKC)",
            Type: "Purebred",
            Temperament: "Familial \n Independent\n Intelligent \n Loyal",
            Height: "22-24 inches (56-60 cm)",
            Weight: "51-75 pounds (23-34 kg)",
            Overview:
              "The Thai Ridgeback is a medium-sized pariah-type dog, with a wedge-shaped head, prick ears, and a short, smooth coat. The length of body from point of buttocks to point of sternum is about 10 percent longer than the height measured at the withers. The depth of chest is equal to the length of the foreleg. The tail is carried vertically or curved like a sickle. This breed is characterized by a ridge of hair growing in the opposite direction to the rest of the coat. This ridge starts at the withers and extends down the spine to the top of the pelvis bones.",
            History:
              "The origin of the Thai Ridgeback is unknown, but the breed developed in eastern Thailand, where the breed was kept pure by isolation. Descriptions of the breed can be found in written references dating back to the 17th century. The breed�s name comes from a ridge of hair that runs along the dog�s back, a trait found in only three breeds of purebred dogs. The Thai Ridgeback was used for hunting, and as a guard dog. Today the breed is still very rare outside of Thailand. The Thai Ridgeback was recognized by the United Kennel Club on January 20, 1996.",
            Galary: "G_ThaiRidgeback.jpg",
          },
          {
            Pic: "Rottweiler.jpg",
            Name: "Rottweiler",
            Size: "Large",
            Character: "Smartest",
            Color: "Black",
            Geography: "Europe",
            Origin: "Germany",
            Breed_Group: "Working (AKC:1931), Guardian Dogs (UKC)",
            Type: "Purebred",
            Temperament: "Alert \n Courageous \n Fearless \n Loyal",
            Height: "24-27 inches (61-69 cm)",
            Weight: "95-130 pounds (43-59 kg)",
            Overview:
              "The Rottweiler is a large breed, slightly longer than it is tall and robust with a powerful, substantial build. It combines the abilities necessary to drive cattle for long distances as well as serve as a formidable guard dog � jobs that entail great strength, agility and endurance. Its trot is sure and powerful, with strong reach and drive. Its coat is straight, coarse and dense. Its expression reflects the Rottweiler at its best � noble, alert and self-assured.",
            History:
              "The Rottweiler (affectionately called 'Rottie') originates in the Roman Empire, where it was used to herd cattle. The name derives from the small town of Rottweil, Germany. The Rottweiler nearly went extinct in the 1800's, but today it has come back in popularity and is used as a police dog, guard dog, herd dog, and tracker. It is a very strong, courageous, seemingly invulnerable breed. Famous fictional Rottweilers include the puppet Triumph the Insult Comic Dog from The Conan O' Brien Show and the family pet in Ferris Bueller's Day Off.",
            Galary: "G_Rottweiler.jpg",
          },
          {
            Pic: "Boxer.jpg",
            Name: "Boxer",
            Size: "Small",
            Character: "Best-guard",
            Color: "Others",
            Geography: "Europe",
            Origin: "Germany",
            Breed_Group: "Working (AKC:1904), Guardian Dogs (UKC)",
            Type: "Purebred",
            Temperament: "Brave\n Bright\n Confident\n Loyal",
            Height: "22-25 inches (56-63 cm)",
            Weight: "60-70 pounds (27-32 kg)",
            Overview:
              "The Bulldog is an ancestor of the Boxer; various terriers were also part of its make-up, which gives the breed its speed, agility and more graceful body. The term �boxer� is British, but the most recent home country for the breed is Germany. �Boxer� seems appropriate since it has a mannerism of using its front legs in combat, much as a man would in fighting. The breed was virtually ignored until World War II, when it was brought into use as a military or police dog. This helped to insure instant popularity with returning servicemen, and the breed became in demand in the United States.",
            Galary: "G_Boxer.jpg",
          },
          {
            Pic: "MiniatureSchnauzer.jpg",
            Name: "Miniature Schnauzer",
            Size: "Small",
            Character: "Smartest",
            Color: "Black",
            Geography: "Europe",
            Origin: "Germany",
            Breed_Group: "Terrier (AKC:1926)(UKC)",
            Type: "Purebred",
            Temperament: "Alert\n Fearless\n Friendly\n Spirited",
            Height: "14 inches (35.6 cm)",
            Weight: "11-18 pounds (5.0-8.2 kg)",
            Overview:
              "The Miniature Schnauzer is a robust, sturdily built terrier of nearly square proportion. It was developed as a ratter and is quick and tough. Its gait displays good reach and drive. Its coat is double, with a close undercoat, and hard, wiry, outer coat which is longer on the legs, muzzle and eyebrows. Its facial furnishings add to its keen expression.",
            History:
              "The Miniature Schnauzer is a German breed. During the years around the turn of the century, both smooth German Pinscher and coarse-haired Schnauzer pups appeared in the same litters. The German Pinscher Schnauzer Club initiated a policy requiring proof of three generations of pure coarse-haired Schnauzer coats for registration. This quickly helped set type and made them a distinct breed from the German Pinscher. \n These Schnauzers were given the name Standard Schnauzer. Miniature Schnauzers were developed by crossing small Standard Schnauzers with the Affenpinscher and possibly the Poodle. The Schnauzer name derived from the German word Schnauze, which means muzzle. It was used as a ratter and still retains the ability, but is mostly a companion dog today. Some of the Schnauzer's talents include: hunting, tracking, ratter, watchdog, competitive obedience and performing tricks.",
            Galary: "G_MiniatureSchnauzer.jpg",
          },
          {
            Pic: "AmericanStaffordshireTerrier.jpg",
            Name: "American Staffordshire Terrier",
            Size: "Medium",
            Character: "Smartest",
            Color: "Others",
            Geography: "North America",
            Origin: "United States",
            Breed_Group: "Terrier (AKC:1936)",
            Type: "Purebred",
            Temperament: "Attentive\n Courageous\n Friendly\n Tenacious",
            Height: "17-19 inches (43-48 cm)",
            Weight: "	57-67 pounds (25-30 kg)",
            Overview:
              "This stocky dog should be muscular, giving the impression not only of great strength for its size but also of grace and agility. Its gait is springy. Its low center of gravity helped it stay on its feet in a fight, and its nimbleness helped it avoid its opponent's teeth. Its own jaws are strong with great power. Its coat is short, close and glossy.",
            History:
              "The American Staffordshire Terrier derived from crossing Bulldogs with an older Terrier line. They are closely related to the American Pit Bull Terrier, from whom they were bred apart in the 1960�s. The American breed was reared largely for illegal dog fighting (the �Pit� in Pit Bull likely derives from fighting pits) in the United States and was recognized as a distinct breed in 1936. \n American Staffordshire Terriers became popular with ranchers and farmers for protection, companionship, and catching hogs and cattle. Despite its media reputation for ferociousness, the American Staffordshire Terrier is an affectionate dog which has risen to popularity as a pet. The American Staffordshire Terrier�s natural aggression is directed toward other dogs, not humans, and even this can be overcome with training. They often serve as search dogs or police dogs. Popsicle, a drug sniffing American Staffordshire Terrier, became famous for sniffing out and locating one of the largest cocaine busts in the history of the FDA.",
            Galary: "G_AmericanStaffordshireTerrier.jpg",
          },
          {
            Pic: "AiredaleTerrier.jpg",
            Name: "Airedale Terrier",
            Size: "Medium",
            Character: "Smartest",
            Color: "Others",
            Geography: "Europe",
            Origin: "United Kingdom",
            Breed_Group: "Terrier (AKC:1888 & UKC)",
            Type: "Purebred",
            Temperament: "Alert, Confident, Intelligent, Outgoing",
            Height: "22-24 inches (56-61 cm)",
            Weight: "50-65 pounds (23-29 kg)",
            Overview:
              "The Airedale terrier is a neat, upstanding, long-legged terrier, not exaggerated in any way. It has strong round bone and combines strength and agility, enabling it to hunt tough game. Its jaws are strong and punishing. Its gait is free. The coat is hard, dense and wiry; it lies straight and close, with some hair crinkling or waving.",
            History:
              "The Airedale Terrier (also known as the �Waterside Terrier�, �Bingley Terrier�, or slightly less modestly the �King of Terriers�, for its height) comes from the Airedale valley in West Yorkshire, England. It was bred by crossing the Otterhound with the Black and Tan Terrier for increased ability in Water Rat hunting competitions on the Aire River. The result was a breed with great scenting and Otter hunting skills which could pursue and retrieve game from its den. It was later crossed with the Irish Terrier and Bull Terrier. \n The Airedale Terrier was first brought to North America in the 1880�s. Champion Master Briar, born in 1897, is considered to be the patriarch of the breed. Airedale Terriers became renowned as messengers and search animals in World War I. President Roosevelt is quoted as saying �An Airedale can do anything any other dog can do and then lick the other dog, if he has to.� John Wayne�s nickname, �The Duke�, was the name of his childhood Airedale Terrier, who accompanied him everywhere he went.",
            Galary: "G_AiredaleTerrier.jpg",
          },
        ];
        let filter = {};
        if (character) {
          filter["Character"] = capitalizeFirstLetter(character);
        }
        if (size) {
          filter["Size"] = capitalizeFirstLetter(size);
        }
        if (color) {
          filter["Color"] = capitalizeFirstLetter(color);
        }
        if (geography) {
          filter["Geography"] = capitalizeFirstLetter(geography);
        }
        let gallery = document.querySelector(".gallery-container")
        console.log(filter);
        JsonFilter(data_dog, filter).all().forEach((dog)=>{
          console.log(dog)
          //gallery.innerHTML += `<img src="${dog.Pic}">`
        })
      }