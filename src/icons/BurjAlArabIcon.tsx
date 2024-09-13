import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BurjAlArabIcon({
  iconName = 'burj-al-arab',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
