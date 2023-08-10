import React, { useEffect, useState } from "react"
import Headline from "./headline"
import Styles from "./style"

import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import SendIcon from "@mui/icons-material/Save"
import { useParams } from "react-router-dom"
import axios from "axios"

const Tags = () => {
  const [inputTags, setInputTags] = useState({ tags: [] })
  const [newTags, setNewTags] = useState("")

  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:3000/tourlist/` + id).then((res) => {
      const tagArray = res.data.tags ? [...res.data.tags] : []
      setInputTags({ ...res.data, tags: tagArray })
    })
  }, [])

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault()
      addTag(newTags.trim())
      setNewTags("")
    }
  }

  const addTag = (e) => {
    if (e === "") return false
    setInputTags({ ...inputTags, tags: [...inputTags.tags, e] })
  }

  const removeTag = (tagRemove) => {
    const newTags = inputTags.tags.filter((tag) => tag !== tagRemove)
    setInputTags({ ...inputTags, tags: newTags })
  }

  const handleChange = (e) => {
    e.preventDefault()
    axios
      .put(`http://localhost:3000/tourlist/` + id, inputTags)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  return (
    <>
      <form onSubmit={handleChange}>
        <Headline
          head={"Tags To define the Tours"}
          subHead={
            "We recommend that you add at least 4 Tags to define your Tour"
          }
        />
        <input
          placeholder='Enter The Tag'
          name='tag'
          type='text'
          value={newTags}
          style={Styles.inputTitle}
          onChange={(e) => setNewTags(e.target.value)}
          onKeyPress={handleInputKeyPress}
        />
        {/* <button onClick={addTag}>Add</button> */}
        <div style={Styles.tags}>
          {inputTags.tags.map((tag, index) => (
            <div key={index} style={Styles.tag}>
              <span style={Styles.tagLabel}>{tag}</span>
              <button
                style={Styles.removeButton}
                onClick={() => removeTag(tag)}
              >
                x
              </button>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "5%" }}>
          <div style={{ margin: "1%" }}>
            <Stack direction='row'>
              <Button
                type='submit'
                variant='contained'
                endIcon={<SendIcon />}
                style={{ margin: "auto" }}
              >
                Update
              </Button>
            </Stack>
          </div>
        </div>
      </form>
    </>
  )
}

export default Tags
