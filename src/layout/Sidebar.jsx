import { Link } from "react-router-dom";
// import announcement from "../../public/a"
const menuItems = [
  {
    title: "overview",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/teacher.png",
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/student.png",
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/parent.png",
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/subject.png",
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: "/class.png",
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/exam.png",
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((e) => (
        <div className="flex flex-col gap-2 mt-5" key={e.title}>
          {/* <span className="hidden lg:block text-gray-500 font-normal truncate mt-4 mb-1 tracking-widest ml-3">
            {e.title}
          </span> */}
          {e.items.map((menus) => (
            <Link
              to={menus.href}
              key={menus.label}
              className="flex rounded-md font-medium capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-700/90 items-center justify-center lg:justify-start gap-3 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
            >
              <img src={menus.icon} alt="" width={20} height={20} />
              <span className="hidden lg:block font-medium ">
                {" "}
                {menus.label}
              </span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
