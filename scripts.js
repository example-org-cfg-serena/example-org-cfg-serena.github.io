function imgAOS() {
    var img= document.getElementsByTagName("img");
        for(i=0; i < img.length; i++) {
            var imgChange= document.getElementsByTagName("img")[i];
            var att = document.createAttribute("data-aos");       // Create a "class" attribute
            att.value = "fade-up";                           // Set the value of the class attribute
            imgChange.setAttributeNode(att);
        }
}