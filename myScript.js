function myFunction() {
      try {
           String url = "http://stackoverflow.com/questions/20597755/get-text-from-url";
           Document doc = Jsoup.connect(url).get();
           Elements element = doc.select("p");

           for (Element t : element) {
             document.getElementById("demo").innerHTML=t.text();
           }

         }
}
