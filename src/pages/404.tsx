import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Custom404() {
    const router = useRouter()

    useEffect(() => {
        router.replace("/berita/bitcoin/bitcoin-vs-saham-mana-yang-lebih-untung?")
    })

    return null
}