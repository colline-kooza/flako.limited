import Image from "next/image";

export default function bunner({ data }) {
  return (
    <div className="bunner">
      <div className="bunner-text">
        <h2>{data.title}</h2>
        <p className="line-clamp">{data.description}</p>
        <div className="button">
          <button>Doorstep Delivery Bonanza</button>
        </div>
      </div>
      <div className="bunner-image">
        <Image src={data.image} alt="" fill />
      </div>
    </div>
  );
}
