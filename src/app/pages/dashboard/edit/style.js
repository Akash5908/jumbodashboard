const Styles = {
  ehNvyi: {
    position: "relative",
    flex: "1 1 0%",
    padding: "40px 0 10 0",
    overflowY: "scroll",
    transform: "translate3d(0px, 0px, 0px)",
  },
  iAWZCU: {
    position: "relative",
    display: "grid",
    flexDirection: "row",
    WebkitBoxPack: "justify",
    justifyContent: "space-between",
    fontSize: "20px",
    gridTemplate: `
          "main side" 1fr
          "buttons ." auto / minmax(300px, 1fr) fit-content(600px)
        `,
    animation: "0.3s linear 0s 1 normal forwards running fadeInEPW",
  },
  jXftJZ: {
    zIndex: 1,
    maxWidth: "1000px",
    opacity: 1,
    gridArea: "main / main / main / main",
  },
  titleHeader: {
    textAlign: "center",
    fontWeight: "bold",
  },
  inputTitle: {
    width: "100%",
    minWidth: "90px",
    padding: "10px 8px",
    fontSize: "16px",
    lineHeight: "1.2",
    transistion: "all 0.2s ease-in-out",
    borderRadius: "4px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  },
  inputContainer: {
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px 0",
  },

  inputContainerLabel: {
    marginRight: "10px",
  },

  inputContainerInput: {
    width: "71px",
    height: "35px",
    borderRadius: "11px",
    marginRight: "5px",
    border: "1px solid #ccc",
  },
  uploadContainer: {
    flex: "1 0 auto",
    height: "370px",
    margin: "0 16 16 0",
    maxWidth: "100%",
  },
}

export default Styles
