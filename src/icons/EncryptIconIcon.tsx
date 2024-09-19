import React from 'react'
import { Icon, IconProps } from '../Icon'

export function EncryptIconIcon({ iconName = 'encrypt-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
