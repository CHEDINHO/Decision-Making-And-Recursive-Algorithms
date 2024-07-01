function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // convert to lowercase and remove non-alphanumeric characters
    if (str.length <= 1) {
        return true;
    } else if (str[0] !== str[str.length - 1]) {
        return false;
    } else {
        return isPalindrome(str.substring(1, str.length - 1));
    }
}