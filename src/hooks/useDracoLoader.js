import { useEffect, useMemo, useState } from "react"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

function useDracoLoader(gltf) {
  const [model, setModel] = useState(null)

  useEffect(() => {
    const loader = new GLTFLoader()
    const dracoLoader = new DRACOLoader()
    loader.setDRACOLoader(dracoLoader)
    loader.load(`/3D/${gltf}/scene.gltf`, setModel)
  }, [])

  return [useMemo(() => model, [model]), setModel]
}

export default useDracoLoader
