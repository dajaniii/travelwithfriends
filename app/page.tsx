import Nav from "./landing/nav";
import Form from "./landing/form";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Nav></Nav>
      <Form></Form>
    </div>
  );
}
