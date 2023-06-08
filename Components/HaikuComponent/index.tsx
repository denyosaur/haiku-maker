const HaikuComponent: React.FC<Haiku> = ({ haiku }) => {
  var separateLines = haiku.split(/\r?\n|\r|\n/g);

  return (
    <div>
      {separateLines.map((line, index) => {
        return <p key={`line-${index + 1}`}>{line}</p>
      })}
    </div>
  )
}

export default HaikuComponent;

interface Haiku {
  haiku: string
}