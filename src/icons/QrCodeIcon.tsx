import React from 'react'
import { Icon, IconProps } from '../Icon'

export function QrCodeIcon({ iconName = 'qr-code', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
