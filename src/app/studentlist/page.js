"use client";
import Link from "next/link";
export default function StudentList() {
  const list = [
    { name: "Avani", id: 1001 },
    { name: "Vihan", id: 1002 },
    { name: "Raghav", id: 1003 },
    { name: "Reyansh", id: 1004 },
    { name: "Devash", id: 1005 },
    { name: "Aditya", id: 1006 },
  ];
  return (
    <>
      <h1>StudentList</h1>
      <ul>
        {list.map((item, index) => (
          <li>
            <Link href={`/studentlist/${item.name}`} key={index}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
