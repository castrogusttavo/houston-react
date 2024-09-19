import React from 'react'
import { Icon, IconProps } from '../Icon'

export function EncryptIcon({ iconName = 'encrypt', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
