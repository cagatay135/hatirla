import React from "react";
import { promises as fs } from "fs";

export default async function TimeLine({ year }) {
  const file = await fs.readFile(process.cwd() + "/app/mock-data.json", "utf8");
  let data = JSON.parse(file);
  const months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];

  return (
    <div>
      {months.map((month, index) => {
        const monthData = data.filter((item) => {
          const itemDate = new Date(item.case_date);
          return (
            itemDate.getFullYear() === year && itemDate.getMonth() === index
          );
        });

        return (
          <div key={index}>
            {monthData.length > 0 && (
              <div className="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 mt-5">
                <time className="text-lg font-semibold text-gray-900 dark:text-white">
                  {month} {year}
                </time>
                <ol className="mt-3 divide-y divide-gray-200 dark:divide-gray-700">
                  {monthData.map((d, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <img
                          className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0"
                          src="https://picsum.photos/200/300"
                          alt="Jese Leos image"
                        />
                        <div className="text-gray-600 dark:text-gray-400">
                          <div className="text-base font-normal">
                            <span className="font-medium text-gray-900 dark:text-white">
                              {d.title}
                            </span>
                          </div>
                          <div className="text-sm font-normal">
                            {d.description}
                          </div>
                          <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                            <svg
                              className="w-2.5 h-2.5 me-1"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 .5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19ZM8.374 17.4a7.6 7.6 0 0 1-5.9-7.4c0-.83.137-1.655.406-2.441l.239.019a3.887 3.887 0 0 1 2.082 2.5 4.1 4.1 0 0 0 2.441 2.8c1.148.522 1.389 2.007.732 4.522Zm3.6-8.829a.997.997 0 0 0-.027-.225 5.456 5.456 0 0 0-2.811-3.662c-.832-.527-1.347-.854-1.486-1.89a7.584 7.584 0 0 1 8.364 2.47c-1.387.208-2.14 2.237-2.14 3.307a1.187 1.187 0 0 1-1.9 0Zm1.626 8.053-.671-2.013a1.9 1.9 0 0 1 1.771-1.757l2.032.619a7.553 7.553 0 0 1-3.132 3.151Z" />
                            </svg>
                            Public
                          </span>
                          <span>{d.case_date}</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
