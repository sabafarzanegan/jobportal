import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const accordinationitem = [
  {
    question: "Hirrd چیست؟",
    answer:
      "Hirrd یک اپلیکیشن پورتال شغلی است که به شرکت‌ها اجازه می‌دهد آگهی‌های شغلی را منتشر کنند و کاربران می‌توانند به جستجو و درخواست شغل بپردازند. این اپلیکیشن امکاناتی برای جویندگان کار و کارفرمایان فراهم می‌کند و دارای رابط کاربری کاربرپسند و احراز هویت امن است.",
  },
  {
    question: "چگونه می‌توانم یک شغل ارسال کنم؟",
    answer:
      "به عنوان کارفرما، می‌توانید پس از ورود به سیستم، به بخش «ثبت شغل» بروید. جزئیات شغل را پر کرده و فرم را ارسال کنید تا یک آگهی شغلی جدید ایجاد شود.",
  },
  {
    question: "چگونه می‌توانم به جستجوی شغل بپردازم؟",
    answer:
      "جویندگان کار می‌توانند با استفاده از نوار جستجو در صفحه اصلی یا صفحه اختصاصی جستجوی شغل، براساس کلمات کلیدی، مکان، دسته‌بندی و فیلترهای دیگر به جستجوی شغل بپردازند.",
  },
  {
    question: "چگونه می‌توانم برای یک شغل درخواست بدهم؟",
    answer:
      "برای درخواست یک شغل، روی آگهی شغلی کلیک کنید و دستورالعمل‌های درخواست را دنبال کنید. ممکن است نیاز به آپلود رزومه و ارائه اطلاعات اضافی داشته باشید.",
  },
  {
    question: "آیا می‌توانم شغل‌ها را برای درخواست در آینده ذخیره کنم؟",
    answer:
      "بله، می‌توانید با کلیک روی دکمه «ذخیره شغل» در آگهی شغلی، شغل‌ها را ذخیره کنید. شغل‌های ذخیره شده را می‌توان از پروفایل شما در بخش «شغل‌های ذخیره شده» مشاهده کرد.",
  },
  {
    question: "چگونه می‌توانم وضعیت درخواست‌های شغلی خود را پیگیری کنم؟",
    answer:
      "جویندگان کار می‌توانند وضعیت درخواست‌های خود را از بخش «درخواست‌ها» در پروفایل خود پیگیری کنند. این بخش به‌روزرسانی‌هایی در مورد پیشرفت هر درخواست ارائه می‌دهد.",
  },
];

function MainAccordination() {
  return (
    <Accordion type="single" collapsible className="w-full py-10" dir="rtl">
      {accordinationitem.map((item) => (
        <AccordionItem value={item.question}>
          <AccordionTrigger className="hover:no-underline flex flex-row-reverse">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-right">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default MainAccordination;
