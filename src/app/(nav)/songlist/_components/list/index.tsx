import React from "react";

interface Props {
  id?: `${number}`;
}
export default function index({ id = ' ' }: Props) {
  return <div>index</div>;
}
