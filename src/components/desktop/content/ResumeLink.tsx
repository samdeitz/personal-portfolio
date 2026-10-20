import AppElement from "../AppElement";

export default function ResumeLink() {
  return <AppElement element={{
    type: "link",
    href: `${import.meta.env.BASE_URL}SamDeitz.pdf`,
    label: "View résumé",
    icon: "open",
    className: "border border-theme-foreground/25 rounded-lg",
  }} />;
}
