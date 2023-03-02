<section id="contact" class="contact">
    <div class="container">

        <h2 class="header">Coffee with me?</h2>
        <h4>I am always excited to work on some awesome projects, message me and let's discuss over coffee.</h4>

        <div class="row">
            <div class="col-sm-8 grid_2">
                <h3>Say hello!</h3>
                <form method="post" action="mail.php">
                    <input type="text" class="text" value="Your Awesome Name?" name="name" id="name"
                        onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Your Awesome Name?';}">
                    <input type="text" class="text" value="Your Email" name="email" id="email"
                        onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Your Email';}">
                    <textarea value="You can write here absolutely anything..." onfocus="this.value= '';" name="message"
                        id="message"
                        onblur="if (this.value == '') {this.value = 'You can write here absolutely anything...';}">You can write here absolutely anything...</textarea>

                    <input type="submit" onclick="contact()" id="send_button" value="Send Message" class="">
                </form>

                <style>
                .disabled-but {
                    cursor: not-allowed !important;
                }

                .disabled-but:hover {
                    background: #b9cfed !important;
                }
                </style>
            </div>
            <div class="col-sm-4 map" id="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.6810172457!2d73.72287834853687!3d18.52489042244042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1572674214359!5m2!1sen!2sin"
                    frameborder="0" style="border:0"> </iframe>
            </div>
        </div>

        <div class="clearfix"> </div>
    </div>
</section>