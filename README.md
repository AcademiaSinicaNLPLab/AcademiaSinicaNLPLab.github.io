A static site for Academia Sinica NLPLab
---

#### Host

- [doraemon.iis.sinica.edu.tw](http://doraemon.iis.sinica.edu.tw)



#### How to update the content?

1. clone this repository

	```sh
	git clone git@github.com:AcademiaSinicaNLPLab/AcademiaSinicaNLPLab.github.io.git
	cd AcademiaSinicaNLPLab.github.io
	```
2. make some modification

3. push to github

	```sh
	git add .								# add files modified
	git commit -m "awesome modification"	# leave commit message
	git push origin master
	```
	
	if you got the following error message, run this script to pull the newest version first!
	```sh
	git pull origin master
	```
	
	> `git push` error message
	```sh
	To git@github.com:AcademiaSinicaNLPLab/AcademiaSinicaNLPLab.github.io.git
	 ! [rejected]        master -> master (fetch first)
	error: failed to push some refs to 'git@github.com:AcademiaSinicaNLPLab/AcademiaSinicaNLPLab.github.io.git'
	hint: Updates were rejected because the remote contains work that you do
	hint: not have locally. This is usually caused by another repository pushing
	hint: to the same ref. You may want to first integrate the remote changes
	hint: (e.g., 'git pull ...') before pushing again.
	hint: See the 'Note about fast-forwards' in 'git push --help' for details.
	```

4. Access [academiasinicanlplab.github.io](http://academiasinicanlplab.github.io), have fun :P

#### Troubleshooting

- Got permission denined while cloning the .git ?!

	```
	git clone xxxxx.git
	Permission denied (publickey).
	```

	take easy, just tell Github that I have the key (permission) to do this :P

	1. open your terminal

		```
		ssh-keygen
		```
	
	2. press `enter`, `enter` and `enter` to use default setting
	
		```
		cat ~/.ssh/id_rsa.pub
		```
	
	3. copy the prompt __"what-the-hell"__ string
	
	4. go to [github > setting > SSH Keys](https://github.com/settings/ssh)
	
	5. click the `Add SSH key` button and paste the __"what-the-hell"__ string, done.



#### Credits

- Template

	Miniport 2.5 by HTML5 UP
	
	html5up.net | @n33co
	
	> Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
	

- Components

	jQuery (jquery.com)
	skelJS (skeljs.org)
	html5shiv.js (@afarkas @jdalton @jon_neal @rem)

		
		
#### Redesigned by

- [Maxis Kao](http://doraemon.iis.sinica.edu.tw/maxis/)
