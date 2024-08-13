import { goto } from '$app/navigation';

function handleSearch(searchInput: string) {
    if (searchInput.trim() === '') {
        goto(`?page=1`);
    } else {
        goto(`?search=${encodeURIComponent(searchInput)}&page=1`);
    }
}

export default handleSearch;