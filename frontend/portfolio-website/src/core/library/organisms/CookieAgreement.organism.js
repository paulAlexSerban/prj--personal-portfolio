import dynamic from 'next/dynamic';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

import { useRef } from 'react';
export default function CookieAgreement() {
    const [mounted, setMounted] = useState(false);
    const modalRef = useRef(null);
    console.log(modalRef);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div>
            {/* {mounted && modalRef.current ? createPortal(<CookieBar />, modalRef.current) : null} */}
            <div id="modal-root" ref={modalRef}></div>
        </div>
    );
}
