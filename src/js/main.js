//import dữ liệu
import { render } from "./common";
import { userNamelist } from "./data";
import { postList } from "./data";
import { worksList } from "./data";

// Khai báo hàm showUser
function showUser(Users) {
  //Kiểm tra
  if (!Array.isArray(Users) || userNamelist.length == 0) return [];

  // Xử lý
  let result = "";
  for (let i = 0; i < Users.length; i++) {
    const User = Users[i];
    result += `
    <div class="grid md:grid-cols-3">
      <div class="md:col-span-2 order-2 md:order-1">
        <div class="">
          <h2 class="text-2xl font-bold md:text-6xl mt-10 md:mt-0">
            Hi, ${Users.name},
          </h2>
          <h2 class="text-2xl font-bold md:text-6xl md:mt-0">
            Creative Technologist
          </h2>
          <p class="md:max-w-[60%] pt-3 text-base">
            U${Users.discription}
          </p>
        </div>
        <div class="mt-16 mb-16">
          <a
            href=""
            class="inline-block rounded-lg bg-red-500 p-4 text-white font-bold  hover:underline"
          >
            Dowload Resume</a
          >
        </div>
      </div>
      <div class="md:col-span-1 order-1 md:order-2">
        <img
          src="${Users.img}"
          alt=""
          class="mx-auto md:ml-auto md:mr-0"
        />
      </div>
  </div>
    `;
  }

  // Return
  return result;
}
render("information", showUser(userNamelist));

// RecentPost

// Khai báo hàm showPost
function showPost(Posts) {
  // Kiểm tra
  if (!Array.isArray(Posts) || postList.length == 0) return [];

  // Xử lý
  let result = "";
  for (let i = 0; i < Posts.length; i++) {
    const post = Posts[i];
    result += `
    <div class="flex justify-between">
    <h2 class="font-bold mt-4">Recent posts</h2>
    <a href="" class="md:text-blue-400 md:hover:underline"> View all</a>
  </div>
  <div class="grid md:grid-cols-2 gap-8">
    <div class="flex justify-between">
      <div class="column">
        <div class="bg-white p-4 mt-4">
          <h2 class="font-bold text-4xl">
            Making a design system from scratch
          </h2>
          <div class="pt-5 space-x-4">
            <span> 12 Feb 2020 </span>
            <span> | </span>
            <span> Design,Pattern</span>
          </div>
          <p class="pt-5">
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor
            do amet sint. Velit officia consequat duis enim velit
            mollit. Exercitation veniam consequat sunt nostrud amet."
          </p>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="bg-white p-4 mt-4">
        <h2 class="font-bold text-4xl">
          Creating pixel perfect icons in Figma
        </h2>
        <div class="pt-5 space-x-4">
          <span>12 Feb 2020</span>
          <span> | </span>
          <span> Figma, Icon Design</span>
        </div>
        <p class="pt-5">
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor
          do amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet."
        </p>
      </div>
    </div>
  </div>
    `;
  }

  //Return
  return result;
}
render("Recent_post", showPost(postList));
