const oven = document.querySelector('#oven');
const telec = document.querySelector('#telec');
const bliznec = document.querySelector('#bliznec');
const rak = document.querySelector('#rak');
const leo = document.querySelector('#leo');
const deva = document.querySelector('#deva');
const vecy = document.querySelector('#vesy');
const scorpion = document.querySelector('#scorpion');
const kozerog = document.querySelector('#kozerog');
const strelec = document.querySelector('#strelec');
const vodolei = document.querySelector('#vodolei');
const ryby = document.querySelector('#ryby');

const aromaOilPar = document.querySelector('#aromaOilPar');
const description = document.querySelector('#description');
const aromaDisplaySection = document.querySelector('.aromaDisplaySection');

const ovenOils = ['бергамот', 'гвоздика', 'лимон', 'можже­вельник', 'мята', 'пачули', 'розмарин', 'сосна', ];
const ovenDescription = 'Энергичная и упорная на пути к своей цели личность. Овна отличает уверенность в себе, высокая коммуникабельность и работоспособность. Его стихия — огонь. ';

const telecOils = ['жасмин', 'сирень', 'кедр', ' сосна', 'ландыш', 'бергамот', 'ваниль', 'шалфей'];
const telecDescription = 'Воплощение стабильности, непоколебимости и спокойствия личность. При этом телец упрям и трудолюбив. Его стихия земля.';

const bliznecyOils = ['бергамот', 'кедр', 'лимон', 'мирра', 'ман­дарин', 'мята', 'сандал', 'нероли']
const bliznecyDescription = 'Разносторонне развитая, активная и целеустремленная личность. Близнецам характерно постоянное стремление к совершенствованию собственной жизни и прогрессу. Их стихия воздух. Ароматы близнецов имеют свежие нотки.';

const rakOils = ['герань', 'иланг-иланг', 'лаванда', 'неро­ли', 'розмарин', 'тубероза', 'эвкалипт', 'бергамот'];
const rakDescription = 'Заботливый, воспитанный, чувственный, гостеприимный и отзывчивый знак Зодиака, но в то же время Раки закрыты эмоционально и подвержены депрессиям. Их стихия — вода.';

const leoOils = ['жасмин',  'роза', 'мандарин', 'мирра', 'ваниль', 'бергамот', 'лилия', 'бессмертник', 'мелисса', 'лайм', 'пихта'];
const leoDescriptions = 'Львы щедрые, верные, мужественные, смелые и харизматичные люди. Достаточно самобытная, неординарная и привлекающая множество взглядов личность. Но не воспринимают критику и достаточно тщеславны. Стихия Льва — огонь.';

const devaOils = ['сандал', 'эвкалипт', 'роза',  'лаванда', 'розмарин', 'фрезия', 'мирт', 'мелисса', 'имбирь', 'апельсин', 'грейпфрут', 'корица мандарин'];
const devaDescription = 'Рациональны, педантичны, проницательны, всегда стремятся к совершенству. Девы имеют богатый внутренний мир и ценят его, всегда стараются находиться в гармонии с окружающим миром. Их стихия — земля.';

const vesyOils = ['роза', 'герань', 'ладан', 'лаванда', 'майоран', 'орхидея', 'кедр', 'белый ирис', 'амбра', 'гардения', 'апельсин'];
const vesyDescriptions = 'Дипломаты Зодиакального дома, общительные, элегантные, всегда аккуратные, немного легкомысленные, но чертовски обаятельные. Весы — мечтательны, мягкие и отзывчивые, нередко часто критикующие окружающих. Их стихия воздух.';

const scorpionOils = ['пачули', 'иланг-иланг',' лаванда', 'ладан', 'майоран', 'апельсин', 'сандал', 'ваниль', 'герань', 'кедр'];
const scorpionDescriptions = 'Авантюрный, энергичный, оптимистичный, темпераментный и ревнивый знак. У них всегда будет превосходное настроение, но только в том случае, если они не будут переутомляться и навсегда сохранят интерес и любопытство к жизни. Их стихия вода.';

const strelecOils = ['кунжут', 'мин­даль', 'мирра', 'нероли', 'пачули', 'розмарин', 'лимон'];
const strelecDescriptions = 'Проницательная и дальновидная личность Стрельца отличается любовью к комфорту и телесным ощущениям. Зачастую импульсивны и активны. Их стихия огонь. ';

const kozerogOils = ['бергамот', 'кедр',  'роза',  'тубероза', 'хвоя', 'эвкалипт', 'кориандр', 'тубероза' ];
const kozerogDescriptions = 'Представители козерога — надёжные, целеустремленные и трудолюбивые люди, но обидчивый, чрезвычайно амбициозный представитель Зодиака. Козероги могут сами себе внушить болезнь только из-за одного намека на недомогание. Их стихия земля.';

const vodoleiOils = ['апельсин', 'бергамот',  'иланг-иланг', 'кедр', 'лимон', 'тубероза', 'лотос', 'фиалка', 'мелисса'];
const vodoleiDescription = 'Рождённым под знаком водолея людям присуща особая лёгкость и авантюрность, нежность и доброта. Эксцентричные, независимые, свободомыслящие бунтари. Ими движет собственный интерес и они редко изменяют своё мнение. Их стихия воздух.';

const rybyOils = ['лаванда', 'лимон', 'мирра',  'нероли', 'тубероза', 'кедр', 'ромашка','эвкалипт'];
const rybyDescription = 'Рыбы всегда стремятся помочь окружающим, зачастую забывая о своих потребностях. Но этому знаку также присущи и отрицательные качества: чрезмерная доверчивость, зависимость, депрессивность и неопределенность в желаниях. Их стихия — вода.';

oven.addEventListener ('click', function(){
   aromaDisplaySection.style.display = "block";
   let randomOil = ovenOils[Math.floor(Math.random()*ovenOils.length)];
   description.textContent = ovenDescription;
   aromaOilPar.textContent = randomOil.toUpperCase();
});

telec.addEventListener ('click', function(){
   aromaDisplaySection.style.display = "block";
   let randomOil = telecOils[Math.floor(Math.random()*telecOils.length)];
   description.textContent = telecDescription;
   aromaOilPar.textContent = randomOil.toUpperCase();
});

bliznec.addEventListener ('click', function(){
   aromaDisplaySection.style.display = "block";
   let randomOil = bliznecyOils[Math.floor(Math.random()*bliznecyOils.length)];
   description.textContent = bliznecyDescription;
   aromaOilPar.textContent = randomOil.toUpperCase();
 });

rak.addEventListener ('click', function(){
   aromaDisplaySection.style.display = "block";
   let randomOil = rakOils[Math.floor(Math.random()*rakOils.length)];
   description.textContent = rakDescription;
   aromaOilPar.textContent = randomOil.toUpperCase();
  });

  leo.addEventListener ('click', function(){
   aromaDisplaySection.style.display = "block";
   let randomOil = leoOils[Math.floor(Math.random()*leoOils.length)];
   description.textContent = leoDescriptions;
   aromaOilPar.textContent = randomOil.toUpperCase();
  });

  deva.addEventListener ('click', function(){
   aromaDisplaySection.style.display = "block";
   let randomOil = devaOils[Math.floor(Math.random()*devaOils.length)];
   description.textContent = devaDescription;
   aromaOilPar.textContent = randomOil.toUpperCase();
  });

 vesy.addEventListener ('click', function(){
   aromaDisplaySection.style.display = "block";
   let randomOil = vesyOils[Math.floor(Math.random()*vesyOils.length)];
   description.textContent = vesyDescriptions;
   aromaOilPar.textContent = randomOil.toUpperCase();
  });

  scorpion.addEventListener ('click', function(){
   aromaDisplaySection.style.display = "block";
   let randomOil = scorpionOils[Math.floor(Math.random()*scorpionOils.length)];
   description.textContent = scorpionDescriptions;
   aromaOilPar.textContent = randomOil.toUpperCase();
  });

  strelec.addEventListener ('click', function(){
   aromaDisplaySection.style.display = "block";
   let randomOil = strelecOils[Math.floor(Math.random()*strelecOils.length)];
   description.textContent = strelecDescriptions;
   aromaOilPar.textContent = randomOil.toUpperCase();
  });

  kozerog.addEventListener ('click', function(){
   aromaDisplaySection.style.display = "block";
   let randomOil = kozerogOils[Math.floor(Math.random()*kozerogOils.length)];
   description.textContent = kozerogDescriptions;
   aromaOilPar.textContent = randomOil.toUpperCase();
  });

 vodolei.addEventListener ('click', function(){
   aromaDisplaySection.style.display = "block";
   let randomOil = vodoleiOils[Math.floor(Math.random()*vodoleiOils.length)];
   description.textContent = vodoleiDescription;
   aromaOilPar.textContent = randomOil.toUpperCase();
  });

  ryby.addEventListener ('click', function(){
   aromaDisplaySection.style.display = "block";
   let randomOil = rybyOils[Math.floor(Math.random()*rybyOils.length)];
   description.textContent = rybyDescription;
   aromaOilPar.textContent = randomOil.toUpperCase();
  });