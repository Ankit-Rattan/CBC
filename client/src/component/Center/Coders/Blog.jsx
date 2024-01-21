import React from "react";
import CodeNav from "./CodeNav";
import BSection from "./BSection";

const Blog = () => {
  return (
    <div>
      <CodeNav />
      <div className="flex flex-wrap justify-around">
        <BSection
          imglink="https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/oXlXu2qukGE/upload/343a9e5b08cbd995d86e043f8835a39b.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
          title="Still confused for IDE ?"
          name="Ankit"
          primarytext="When a student put his/her first step in CP (Competitive Programming), he interacts with different types of platforms, where he/she can solve problems, take part in Contests and many more. There are various platforms like HackerRank, InterviewBit, HackerEarth, Leetcode, Codechef, CodeForces and many others. 
          In the beginning stage, one should always start with basic platforms like HackerRank, and Hacker Earth. They give you a proper beginner setup from where you can grow properly. Once you are ready to enter into contests and solve problems, then platforms like LeetCode, Codechef and Codeforces play a crucial role. Now among them, which is the best platform for competitive programming?
"
          link="https://createbycoders.hashnode.dev/still-confused-for-ide-beginners"
        />
        <BSection
          imglink="https://cdn.hashnode.com/res/hashnode/image/upload/v1678818644026/8a2d914f-342a-4833-b657-f4b80f68aff9.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
          link="https://createbycoders.hashnode.dev/best-platform-for-competitive-programming"
          title="Best Platform for Competitive Programming?"
          name="Himanshu"
          primarytext="When a beginner starts coding, the very first thing he is introduced to is IDE, which is the Integrated Development Environment. IDE, as the name suggests, is the software that gives you the proper environment for coding. There are different types of IDE's launched by different tech companies. Some are specific to one language or one type of language and some are for different types of programming languages. Besides all these things, nowadays online compilers are also available, where you can save your code and make different folders. They are providing a systematic manner of storage for your code. But when it comes to any project which is related to your system's data, then installed software plays a crucial role in this."
        />
        <BSection
          imglink="https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/D9Zow2REm8U/upload/34f24bc38bd018377bd053b91acb1b9b.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
          link="https://createbycoders.hashnode.dev/why-python-is-not-good-for-beginners"
          title="Why Python is not good for Beginners?"
          name="Rattan"
          primarytext="No Doubt! Python is one of the great languages and also in 2020 it is one of the trending languages. There is a great boom in python language. Beside all these things, python syntax is one of the simplest and easiest as compared to other languages like java, c and many more. For example, if one have to print 'Hello World!' in python and C++, there is great difference in number of lines and overall syntax. But even after all such things, it is not used or preferred for beginners to start with. There are many reasons of not preferring Python, instead go with languages like C++ or C. The main reason of this is the basic logic building. Python help in logic building but when compared with languages like C++, then C++ somewhere gets and edge over it."



        />
        <BSection
          imglink="https://cdn.hashnode.com/res/hashnode/image/upload/v1679147667030/dbdf6399-28cc-4862-ae6b-49a3829cbbf7.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
          link="https://createbycoders.hashnode.dev/binary-a-future-aid-or-destruction"
          title="Binary, a future aid or destruction?"
          name="Ankit"
          primarytext="The word 'Binary' makes a lot of sense to those who understand this, otherwise, those who do not understand it or do to know about it will treat it as the uneven flow of zeroes and ones. But in practical life, if one observes then, life without these zeroes and ones is nothing. The main thing that is main reason for its importance is the programming language. Programming languages have become an integral part of modern life. From smartphones and laptops to smart homes and self-driving cars, computers and software have infiltrated every aspect of our daily routines. Either directly or indirectly, humans are using it and its application."


        />
      </div>
    </div>
  );
};

export default Blog;
