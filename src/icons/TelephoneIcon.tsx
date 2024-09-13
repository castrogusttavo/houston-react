import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TelephoneIcon({ iconName = 'telephone', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
