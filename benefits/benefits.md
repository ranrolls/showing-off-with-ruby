!SLIDE full-page-image

![Text editor](texteditor.png "Text editor")

!SLIDE full-page-image

![Have you checked your files in?](checked_in.jpg "With showoff you can")

Image courtesy of [Simbolism](http://www.flickr.com/people/simbolism/)

!SLIDE

    @@@ diff
    diff --git a/example/bonus/bonus.md b/example/bonus/bonus.md
    index 7d359ff..3327815 100644
    --- a/example/bonus/bonus.md
    +++ b/example/bonus/bonus.md
    @@ -1,8 +1,7 @@
    -# Easy to add functionality #
    +# Customisable #

    +    @@@ javascript

!SLIDE execute

# Code highlighting #

    @@@ javaScript
    function testMe(number)
    {
      if(number == 1) {
        return number;
      }
      return (number * testMe(number - 1));
    }

    result = testMe(5)

!SLIDE

# Menu System #

!SLIDE commandline incremental

# Command-line Reenactor #

	$ git clone git://github.com/schacon/showoff.git
	Initialized empty Git repository in /private/tmp/showoff/.git/
	remote: Counting objects: 692, done.
	remote: Compressing objects: 100% (646/646), done.
	remote: Total 692 (delta 298), reused 8 (delta 0)
	Receiving objects: 100% (692/692), 3.59 MiB | 4.87 MiB/s, done.
	Resolving deltas: 100% (298/298), done.
	$ cd showoff/
	$ ls
	LICENSE     TODO.txt   lib      showoff.gemspec
	README.txt  bin        public   views
	Rakefile    example    script


!SLIDE

# Customisable #

    @@@ javascript
    function pechaKucha()
    {
      setInterval(function() {
        nextStep();
      }, 20000);
    }


!SLIDE full-page-image

![Web](internet.jpg "Web")

Image courtesy of <span xmlns:cc="http://creativecommons.org/ns#" about="http://www.flickr.com/photos/sebjoguet/162330937/"><a rel="cc:attributionURL" href="http://www.flickr.com/photos/sebjoguet/">Seb Joguet</a> <a rel="license" href="http://creativecommons.org/licenses/by-nc/2.0/">(CC)</a></span>

## showoff-paris.heroku.com ##