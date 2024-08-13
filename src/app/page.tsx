export default function Page() {
  return (
    <div className="flex justify-between px-16">
      <div>
        <h3>Welcome</h3>
      </div>
      <div>
        <div className="bg-green-500 w-[401px] h-[401px]">
          <Image src="/image.jpg" />
        </div>
      </div>
    </div>
  );
}
