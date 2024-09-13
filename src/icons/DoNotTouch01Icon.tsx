import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DoNotTouch01Icon({
  iconName = 'do-not-touch-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
