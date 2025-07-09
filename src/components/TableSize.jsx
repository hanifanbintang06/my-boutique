function TableSize() {
    return (
        <table class="w-full text-left rtl:text-right border-r border-l border-gray-400">
            <thead className="bg-black text-white">
                <tr>
                    <th scope="col" class="px-6 py-1">Ukuran</th>
                    <th scope="col" class="px-6 py-1">Panjang baju</th>
                    <th scope="col" class="px-6 py-1">Lebar dada</th>
                    <th scope="col" class="px-6 py-1">Panjang lengan</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b border-gray-400">
                    <td scope="col" class="px-6 py-1">S</td>
                    <td scope="col" class="px-6 py-1">49 cm</td>
                    <td scope="col" class="px-6 py-1">67 cm</td>
                    <td scope="col" class="px-6 py-1">21 cm</td>
                </tr>
                <tr className="border-b border-gray-400">
                    <td scope="col" class="px-6 py-1">M</td>
                    <td scope="col" class="px-6 py-1">51 cm</td>
                    <td scope="col" class="px-6 py-1">70 cm</td>
                    <td scope="col" class="px-6 py-1">22 cm</td>
                </tr>
                <tr className="border-b border-gray-400">
                    <td scope="col" class="px-6 py-1">L</td>
                    <td scope="col" class="px-6 py-1">53 cm</td>
                    <td scope="col" class="px-6 py-1">74 cm</td>
                    <td scope="col" class="px-6 py-1">23 cm</td>
                </tr>
            </tbody>
        </table>
    )
}

export default TableSize;