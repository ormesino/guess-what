export default function Welcome( { ans }) {
  return (
    <div>
      <div>
        <h1>
          Hello and welcome to the bunny&apos;s cassin... ops, the bunny&apos;s
          amusement park!
        </h1>
        <p>
          Here you&apos;ll be treated with the greatest games that will totally
          not get you in trouble! How about we play a little?
        </p>
        <p>
          But first, to spice up the games a little bit, only to increase the levels
          of <strong>FUN</strong> of course, would you bet something in advance?
        </p>
      </div>
      <div>
        <button onClick={ans}>
          Bet something whatever
        </button>
      </div>
    </div>
  )
}
