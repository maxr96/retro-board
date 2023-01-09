const CardOverlay = (props: { text: string }) => {
  return (
    <div class="bg-blue-50 rounded-lg p-5 text-center focus:border-blue-300">
      {props.text}
    </div>
  );
};

export default CardOverlay;
