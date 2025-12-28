import React from "react";

export function Button({
  className = "",
  variant,
  asChild,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition active:translate-y-px";
  const outline =
    "border border-white/15 bg-white/5 text-white hover:bg-white/10";
  const solid = "bg-white text-black hover:opacity-90";

  const styles = variant === "outline" ? outline : solid;

  if (asChild) {
    // If asChild is used, we expect the child to be an <a> tag.
    const child = React.Children.only(props.children);
    return React.cloneElement(child, {
      className: [base, styles, className, child.props.className]
        .filter(Boolean)
        .join(" "),
    });
  }

  return (
    <button className={[base, styles, className].join(" ")} {...props} />
  );
}
