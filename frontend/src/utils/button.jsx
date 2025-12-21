import './button.css'

export default function button({text}) {
  return (
     <div class="center">
      <button type="button">
        <div class="top">{text}</div>
        <div class="bottom"></div>
      </button>
    </div>
  )
}
