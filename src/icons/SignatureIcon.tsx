import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SignatureIcon({ iconName = 'signature', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
