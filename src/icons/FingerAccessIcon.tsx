import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FingerAccessIcon({
  iconName = 'finger-access',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
