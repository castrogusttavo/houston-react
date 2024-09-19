import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FingerAccessIconIcon({ iconName = 'finger-access-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
