# .dotfiles problems
Recently, I took the plunge and made Linux, specifically Ubuntu, my daily driver. For those unfamiliar, this means I'm spending a considerable amount of time navigating through the terminal.

One of the invaluable tools that comes bundled with Linux is Vim, and once again, I'm committing to using it full time. (Cue the eye roll.) Yes, I know I've made this pledge before, I am like an alcoholic swearing off alcohol, but trust me, this time feels different. As I embark on my journey to master Vim, I've begun to integrate other tools to enhance the experience. I dabbled with tmux, but I found myself not using it much. I tended to open a second terminal. Nonetheless, I do want tohold onto my .config file for it.

Another game-changer that's vastly improved my Linux experience is aliases. Essentially, by scripting some bash in my .bashrc file, I can make terminal commandse easier to remember.
For instances:
``
gs = git status;
vic = vim ~/.config/vim/init.vim
``
However, as these tools come with their own configuration files residing in the home directory—.vimrc, .tmux.conf, .bashrc—they inevitably tend to get cluttered, and clutter drives me crazy. Call me a true millennial, but I crave simplicity. I'm determined to streamline these configurations before they devolve into a tangled mess, forcing me to switch back to Windows. My plan is to organize them based on specific functionalities.

Since init.vim and .tmux.conf don't directly affect the shell, I'll arrange them as follows: 


``
.aliases.sh
init.vim
.tmux.conf
.bashrc
install.sh
``

To link these files neatly, I'll simply include this snippet of bash in my .bashrc file: 

``
source path/to/aliases.sh  

source path/to/autostart.sh
``
Okay. That felt more complicated than necessary.

[The files can be found here](https://github.com/hawk0120/dotfiles.git)
