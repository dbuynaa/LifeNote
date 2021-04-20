# Life Note ni
Node.js ашиглан бүрэн ажиллагаатай site

  <img src="https://scontent.fuln1-1.fna.fbcdn.net/v/t1.15752-9/172634573_282922603467071_5838308048362368098_n.png?_nc_cat=102&ccb=1-3&_nc_sid=ae9488&_nc_ohc=Zal9tlVs5EoAX8QqKhD&_nc_ht=scontent.fuln1-1.fna&oh=d5159e063446dcecb482a6fcd09e6c61&oe=60A22755" alt="">
  
 # download clone zip
 
  https://github.com/dbuynaa/LifeNote/archive/refs/heads/main.zip
      

## Ашиглах
Яаж ашиглах вэ:

1. Visual studtio дээрээ folderoor нь нээнэ :

    ```yml
    file->Open Folder-->lifenote
    ```
    

2.  Terminal гаргаж ирээд npm install гэж бичнэ(NPM-ээс модул суулгах):

        Open Terminal-->npm i
    
    
3.  My Sql дээр DataBase үүсгэнэ (Mysql суулгасан байх ёстой):

    Датабасэээ үүсгэхдээ үүнийг бичихэд болно
       
        CREATE DATABASE IF NOT EXISTS `nodelogin` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
        USE `nodelogin`;

        CREATE TABLE IF NOT EXISTS `blogPost` (
          `id` int(11) NOT NULL,
          `title` varchar(50) NOT NULL,
           `desTitle` varchar(50) NOT NULL,
          `description` varchar(255) NOT NULL,
          `blogPhoto` varchar(255) NOT NULL,
           `date` varchar(255),
            `user` varchar(255) NOT NULL,
             `category` varchar(50)
        ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;


        ALTER TABLE `blogPost` ADD PRIMARY KEY (`id`);
        ALTER TABLE `blogPost` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
          CREATE TABLE IF NOT EXISTS `accounts` (
          `id` int(11) NOT NULL,
          `username` varchar(50) NOT NULL,
          `password` varchar(255) NOT NULL,
          `email` varchar(255) NOT NULL,
           `profilePicture` varchar(255)
        ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

        ALTER TABLE `accounts` ADD PRIMARY KEY (`id`);
        ALTER TABLE `accounts` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;     
         Бичээд run дархад болно
         
         
4.Visual studio ороод ".env" file үүсгээд доорх кодыг бичнэ
       (DB_PASSWORD дээр өөрийнхөө password-ийг хийж өгнө)
   
            DB_HOST  = 'localhost'
            DB_USERNAME  = 'root'
            DB_PASSWORD = ''
            DB_NAME = 'nodelogin'
            SERVER_PORT = 3000
       
5.Одоо browseroo гаргаад "Localhost:3000" гэж бичнэ       
