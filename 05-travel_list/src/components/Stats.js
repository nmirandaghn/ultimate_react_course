export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  const totalItems = items.length;
  const totalPacked = items.filter((item) => item.packed).length;
  const percentPacked = (totalPacked / totalItems) * 100;

  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "You got everything! to go ✈️"
          : `🌴You have ${totalItems} items on your list, 
          and you already packed ${totalPacked} (${percentPacked.toFixed()}%) of them.`}
      </em>
    </footer>
  );
}
