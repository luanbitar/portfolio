import {useEffect, useState} from "react";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader";

function useDracoLoader(gltf) {
  const [model, setModel] = useState(null)

  useEffect(() => {
    const loader = new GLTFLoader()
    const dracoLoader = new DRACOLoader()
    loader.setDRACOLoader(dracoLoader)
    loader.load(`/3D/${gltf}/scene.gltf`, setModel)
  }, [])

  return [
    model,
    setModel
  ]
}

export default useDracoLoader
