# string_splosion('Code') → 'CCoCodCode'
# string_splosion('abc') → 'aababc'
# string_splosion('ab') → 'aab'

def string_splosion(str):
    res = ''
    for i in range(len(str)):
            res += str[:i+1]
    return res
