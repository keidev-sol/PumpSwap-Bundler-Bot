import readline from "readline"

export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

export const screen_clear = () => {
    console.clear();
}

export const main_menu_display = () => {
    console.log('\t[1] - Create Token');
    console.log('\t[2] - Security Checks');
    console.log('\t[3] - Create Wallets to BundleBuy');
    console.log('\t[4] - Create Extend LookUpTable');
    console.log('\t[5] - Create Pool And BundleBuy');
    console.log('\t[6] - Burn LP Token');
    console.log('\t[7] - Sell all tokens');
    console.log('\t[8] - Gather Sol from bundler wallets');
    console.log('\t[9] - Exit');
}

export const security_checks_display = () => {
    console.log('\t[1] - Remove Mint Authority');
    console.log('\t[2] - Remove Freeze Authority');
    console.log('\t[3] - Back');
    console.log('\t[4] - Exit') ;
}
