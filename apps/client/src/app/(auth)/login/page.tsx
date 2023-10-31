import dynamic from 'next/dynamic'

const HankoAuth = dynamic(() => import('@/components/auth/HankoAuth'), {
    ssr: false,
})

export default async function RegisterPage() {

    return (
        <>
            <div className="flex flex-col gap-20">
                <main className="w-full">
                    <div className="container items-center text-center">
                        <div className="text-center">
                            <p>login header</p>
                        </div>
                        <HankoAuth />
                        <div className="font-xs mx-0 mt-8 w-full text-center text-primary">
                            <p>login footer</p>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}