function myFunction() {
      try {
           String url = "https://5gsieutoc.com/api/v1/client/subscribe?token=989c672fee7af3a765ecbd2315e1c973&flag=v2rayn";
           Document doc = Jsoup.connect(url).get();
           Elements element = doc.select("p");

           for (Element t : element) {
             document.getElementById("demo").innerHTML=t.text();
           }

         }
}
