<template>
    <HeaderAdminScreen/>
    <div class="flex">
        <SidebarScreen/>
        <div class="Container w-[100%]">
            <h1 class="text-[25px] font-black pl-5 mt-[28px]">Danh Sách Học Viên</h1>
            <table class="Table">
                <tr>
                    <th class="tableItems"></th>
                    <th class="tableItems">Họ và Tên</th>
                    <th class="tableItems w-[200px]">Gmail</th>
                    <th class="tableItems">Số điện thoại</th>
                    <th class="tableItems">Số khoá học tham gia</th>
                    <th class="tableItems">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="Icon w-6 h-6">
                            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                            <path fill-rule="evenodd"
                                d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                                clip-rule="evenodd" />
                        </svg>
                    </th>
                    <th class="tableItems">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="Icon w-6 h-6">
                            <path fill-rule="evenodd"
                                d="M6.72 5.66l11.62 11.62A8.25 8.25 0 006.72 5.66zm10.56 12.68L5.66 6.72a8.25 8.25 0 0011.62 11.62zM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788z"
                                clip-rule="evenodd" />
                        </svg>
                    </th>
                </tr>
                <tr>
                    <td class="tableItems"><img
                            src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/402115421_1748573295622852_6964444934763396830_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Bgk_z7agv_sAX8eGo6D&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfDFpJJ6QbNK5pz4HuXlZYZdQIzj05_khTjUKNRmlfkhtA&oe=657E4547"
                            class="avatar w-20 rounded-full m-3"></td>
                    <td class="tableItems">
                        <div class="text-center">Nguyễn Đình Khang</div>
                    </td>
                    <td class="tableItems">
                        <div class="text-center">KhangDan@gmail.com</div>
                    </td>
                    <td class="tableItems">
                        <div class="text-center">000000000</div>
                    </td>
                    <td class="tableItems">
                        <div class="text-center">1</div>
                    </td>
                    <td class="tableItems">
                        <div class="text-center"><button class="border border-black rounded-lg"><span class="mx-3">Chi
                                    tiết</span></button></div>
                    </td>
                    <td class="tableItems">
                        <div class="text-center"><button class="border border-black rounded-lg bg-red-400"><span
                                    class="mx-3">Khoá</span></button></div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
import SidebarScreen from "./SidebarScreen.vue";
import HeaderAdminScreen from "./HeaderAdminScreen.vue";
export default {
    components: {
        SidebarScreen,
        HeaderAdminScreen,
    }
}
</script>