try {
    //
} catch(error){
    fix = OpenAI.chat('Fix for:', error.msg)
    console.log(fix)
}