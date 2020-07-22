export const QualityType = {
   ERROR: false,
   WARNING: undefined,
   SUCCESS: true
}

export const getExpectedColor = expected => {
   if (expected === QualityType.ERROR)
         return 'var(--danger)'
   if (expected === QualityType.WARNING)
         return 'var(--warning)'
   if (expected === QualityType.SUCCESS)
         return 'var(--success)'

   return 'initial'
}