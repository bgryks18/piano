# Piyano Çalma Uygulaması
Klavyeyle veya mouse ile tarayıcı üzerinden piyano çalmanızı sağlayan web uygulamasıdır.

## Demo
Uygulamanın demosu:
https://prismatic-fox-0c98bd.netlify.app

## Not
   Netlify demosunda, seste çok hafif bir gecikme farkedebilirsiniz ama localde çalıştırınca böyle bir durum hiç olmuyor. Bu yüzden sunucudan kaynaklı olduğunu düşünüyorum.

## Uygulamayı Çalıştırma

Aşağıdaki komutla projeyi klonlayın.

    git clone https://github.com/bgryks18/piano.git
Ve proje klasörüne geçin

    cd piano

Uygulamanın çalışabilmesi için gerekli paketlerin kurulu olması gerekir. 
Aşağıdaki komut ile uygulamanın bağımlı olduğu paketlerin hepsi kurulur.

    npm install


## Uygulamayı Test Etme

    npm start
  komutu ile uygulamayı çalıştırın ve sunucu adresinizi tarayıcıda açın.
  Web sayfanız açıldığında piyano keyboard'u sizi karşılayacaktır. Her piyano tuşunun, tetikleneceği klavye tuşu üzerinde yazıyor. Bu tuşlara basarak veya mouse ile tıklayarak notayı çaldırabilirsiniz. Büyük tuşları kullanmak için shifte basılı tutabilirsiniz. 
  
## Uygulama Nasıl Çalışıyor
     /src/sounds/

dizininde ses dosyaları tutuluyor.

     /src/keys.js 
   dosyasında belirlenip export edilen obje, ses dosyası ismine karşılık gelen klavye tuşlarını belirliyor.
   Property ismi, ses dosyası ismini, 
   Property değeri, hangi tuşa basıldığında çalacağını belirtiyor.
   
   Property değerini klavyedeki bir tuş olarak tanımlayabilirsiniz, örneğin 'q' gibi. Bu string olmalıdır.
   
   Ya da bir keyCode olarak tanımlayabilirsiniz, örneğin 81 gibi. Bu number olmalıdır.
   
   Eğer **/src/sounds/** dizinine bir ses dosyası ekleyip, **/src/keys.js** dosyasındaki objeye dosya ismiyle aynı bir property eklerseniz, uygulamada bir piano tuşu daha oluşacaktır.
   
## Mobil Uyumluluk
   Tasarım, 400 pixel'e kadar uyumludur. Daha altında bozulur. Ancak işlev olarak mobilde çalıştırmaya uygun değildir.
   
